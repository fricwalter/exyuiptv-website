#!/usr/bin/env python3
"""
Blog Image Generator für exyuiptv.org
Generiert Titelbilder für alle 10 Blog-Posts via OpenAI DALL-E 3
"""

import os
import sys
import time
import requests
from openai import OpenAI

# === KONFIGURATION ===
OUTPUT_DIR = "public/images/blog"
IMAGE_SIZE = "1792x1024"  # 16:9 landscape für Blog-Header
IMAGE_QUALITY = "standard"  # "hd" für bessere Qualität (kostet mehr)
IMAGE_STYLE = "vivid"  # "vivid" oder "natural"

# === BLOG POSTS MIT OPTIMIERTEN PROMPTS ===
BLOG_POSTS = [
    {
        "slug": "android-box-iptv-instalacija",
        "filename": "android-box-iptv-instalacija.jpg",
        "prompt": (
            "Professional product photo of a sleek black Android TV Box set-top box connected to a modern 4K television, "
            "displaying a colorful IPTV channel list menu on screen. The device has indicator lights glowing blue. "
            "Clean, modern living room background with dark ambient lighting. Technology marketing style, "
            "photorealistic, 16:9 wide format, no text overlay."
        )
    },
    {
        "slug": "fire-tv-stick-iptv-instalacija",
        "filename": "fire-tv-stick-iptv-instalacija.jpg",
        "prompt": (
            "Professional product photo of an Amazon Fire TV Stick plugged into the HDMI port of a modern flat-screen TV, "
            "with the TV displaying a streaming channel menu. Remote control visible nearby. Clean dark background "
            "with subtle blue lighting. Technology product marketing style, photorealistic, 16:9 wide format, no text."
        )
    },
    {
        "slug": "kako-instalirati-iptv-na-samsung-tv",
        "filename": "kako-instalirati-iptv-na-samsung-tv.jpg",
        "prompt": (
            "Professional photo of a large Samsung QLED Smart TV mounted on a wall in a modern living room, "
            "showing a Smart TV app store interface on screen with streaming apps visible. Minimalist interior design, "
            "warm ambient lighting. Technology lifestyle marketing photo, photorealistic, 16:9 wide format, no text."
        )
    },
    {
        "slug": "najbolji-iptv-box-2026",
        "filename": "najbolji-iptv-box-2026.jpg",
        "prompt": (
            "Professional flat lay photo comparing three different IPTV streaming boxes arranged neatly on a dark surface, "
            "each glowing with indicator lights. Modern tech product comparison photo aesthetic. "
            "Clean dark background with dramatic lighting highlighting the devices. "
            "Technology review style, photorealistic, 16:9 wide format, no text or labels."
        )
    },
    {
        "slug": "sta-je-iptv-i-kako-radi",
        "filename": "sta-je-iptv-i-kako-radi.jpg",
        "prompt": (
            "Digital technology concept illustration showing internet data streams flowing into a television screen, "
            "with glowing fiber optic cables, WiFi symbols, and a colorful TV broadcast signal visualization. "
            "Dark background with blue and purple neon light effects. Modern tech infographic aesthetic, "
            "clean and professional, 16:9 wide format, no text."
        )
    },
    {
        "slug": "iptv-vs-kabelska-televizija",
        "filename": "iptv-vs-kabelska-televizija.jpg",
        "prompt": (
            "Split-screen concept photo showing a modern IPTV streaming setup on the left with a sleek smart TV "
            "and multiple device icons, contrasted with an old-style cable TV setup with thick cables and a satellite dish "
            "on the right. Modern vs traditional technology comparison visual. Clean graphic design aesthetic, "
            "dark background with blue accent lighting, photorealistic, 16:9 wide format, no text."
        )
    },
    {
        "slug": "kako-poboljsati-kvalitetu-iptv-streama",
        "filename": "kako-poboljsati-kvalitetu-iptv-streama.jpg",
        "prompt": (
            "Professional photo of a modern WiFi router with glowing lights surrounded by device icons showing "
            "strong signal strength bars and 4K video quality indicators. Clean home tech setup on a desk. "
            "Blue and white accent lighting, technology optimization concept. "
            "Marketing style photography, photorealistic, 16:9 wide format, no text."
        )
    },
    {
        "slug": "legalnost-iptv-u-njemackoj",
        "filename": "legalnost-iptv-u-njemackoj.jpg",
        "prompt": (
            "Professional conceptual photo showing a TV screen displaying content with European Union flag and "
            "German flag subtly reflected, with a symbolic legal scales icon overlaid as glowing light. "
            "Modern TV in a clean European apartment interior. Serious, professional tone, "
            "photorealistic, 16:9 wide format, no text."
        )
    },
    {
        "slug": "najbolji-sportski-kanali-exyu-iptv",
        "filename": "najbolji-sportski-kanali-exyu-iptv.jpg",
        "prompt": (
            "Dramatic photo of a modern home theater with a large TV screen showing a live football match "
            "with stadium lights and a packed crowd visible on screen. Energetic sports viewing atmosphere "
            "with dramatic side lighting. The room shows subtle excitement with a couch and dim ambient light. "
            "Sports entertainment marketing style, photorealistic, 16:9 wide format, no text."
        )
    },
    {
        "slug": "kako-gledati-exyu-kanale-u-inostranstvu",
        "filename": "kako-gledati-exyu-kanale-u-inostranstvu.jpg",
        "prompt": (
            "Lifestyle photo of a person sitting in a cozy apartment with a European city skyline visible through "
            "the window at night, watching a TV that shows Balkan TV channel content with warm colors. "
            "The scene evokes diaspora nostalgia - watching home channels abroad. "
            "Warm, emotional, lifestyle marketing style, photorealistic, 16:9 wide format, no text or logos."
        )
    },

    # ===== NOVI POSTOVI - Mart 2026 =====

    {
        "slug": "iptv-besplatno-testirati-24h",
        "filename": "iptv-besplatno-testirati-24h.jpg",
        "prompt": (
            "Clean modern tech concept photo showing a smartphone or tablet displaying a free trial countdown timer "
            "with the number '24' glowing in blue, surrounded by floating channel icons and streaming symbols. "
            "Dark background with vibrant blue and purple neon glows suggesting premium streaming content. "
            "The mood is welcoming and risk-free — inviting someone to try a service for free. "
            "Technology product marketing style, photorealistic, no text, 16:9 wide format."
        )
    },
    {
        "slug": "tivimate-vs-iptv-smarters-pro-2026",
        "filename": "tivimate-vs-iptv-smarters-pro-2026.jpg",
        "prompt": (
            "Professional flat lay photo of two Android TV remote controls placed side by side on a dark surface, "
            "with a large OLED TV in the background showing a split-screen of two elegant IPTV app interfaces "
            "with channel grids and EPG program guides. Clean comparison aesthetic, blue and purple accent lighting, "
            "technology product review style. Photorealistic, no text labels, 16:9 wide format."
        )
    },
    {
        "slug": "iptv-osterreich-bosanski-srpski-kanali",
        "filename": "iptv-osterreich-bosanski-srpski-kanali.jpg",
        "prompt": (
            "Beautiful lifestyle photo showing a cozy modern apartment in Vienna with the iconic Stephansdom cathedral "
            "slightly visible through the window at golden hour. A large smart TV on the wall shows vibrant Balkan "
            "TV channel content — warm Eastern European nostalgia meets Austrian urban living. A coffee cup and "
            "Bosnian baklava on the table add cultural warmth. Diaspora lifestyle photography, photorealistic, "
            "warm tones, emotional, no text or logos, 16:9 wide format."
        )
    },
]


def download_image(url: str, filepath: str) -> bool:
    """Download image from URL and save to file."""
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        with open(filepath, "wb") as f:
            f.write(response.content)
        return True
    except Exception as e:
        print(f"  ❌ Download-Fehler: {e}")
        return False


def generate_images(api_key: str):
    """Generate all blog images using DALL-E 3."""
    client = OpenAI(api_key=api_key)

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"\n🎨 Blog Image Generator - exyuiptv.org")
    print(f"{'='*50}")
    print(f"📁 Output: {OUTPUT_DIR}")
    print(f"📐 Größe: {IMAGE_SIZE}")
    print(f"🖼️  Posts: {len(BLOG_POSTS)}")
    print(f"{'='*50}\n")

    success_count = 0

    for i, post in enumerate(BLOG_POSTS, 1):
        filepath = os.path.join(OUTPUT_DIR, post["filename"])

        # Skip if already exists
        if os.path.exists(filepath):
            print(f"[{i}/{len(BLOG_POSTS)}] ⏭️  Bereits vorhanden: {post['filename']}")
            success_count += 1
            continue

        print(f"[{i}/{len(BLOG_POSTS)}] 🎨 Generiere: {post['slug']}")

        try:
            response = client.images.generate(
                model="dall-e-3",
                prompt=post["prompt"],
                size=IMAGE_SIZE,
                quality=IMAGE_QUALITY,
                style=IMAGE_STYLE,
                n=1,
            )

            image_url = response.data[0].url

            if download_image(image_url, filepath):
                print(f"  ✅ Gespeichert: {filepath}")
                success_count += 1

            # Rate limiting: DALL-E 3 erlaubt 5 images/min auf Standard
            if i < len(BLOG_POSTS):
                print(f"  ⏳ Warte 13s (Rate Limit)...")
                time.sleep(13)

        except Exception as e:
            print(f"  ❌ Fehler: {e}")
            continue

    print(f"\n{'='*50}")
    print(f"✅ Fertig! {success_count}/{len(BLOG_POSTS)} Bilder generiert")
    print(f"📁 Ordner: {OUTPUT_DIR}")

    if success_count > 0:
        print(f"\n⚠️  Nächster Schritt: blogPosts.ts mit image-Feldern updaten!")


if __name__ == "__main__":
    # API Key aus Umgebungsvariable oder Argument
    api_key = os.environ.get("OPENAI_API_KEY")

    if not api_key and len(sys.argv) > 1:
        api_key = sys.argv[1]

    if not api_key:
        print("❌ OpenAI API Key fehlt!")
        print("\nNutzung:")
        print("  export OPENAI_API_KEY='sk-...'")
        print("  python3 generate_blog_images.py")
        print("\nOder direkt:")
        print("  python3 generate_blog_images.py 'sk-...'")
        sys.exit(1)

    generate_images(api_key)
