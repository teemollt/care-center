from PIL import Image
import os
import sys

def split_image():
    input_path = "public/images/two.png"
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found")
        sys.exit(1)

    try:
        with Image.open(input_path) as img:
            width, height = img.size
            print(f"Original size: {width}x{height}")
            
            # Assuming Left/Right split based on aspect ratio (1.5)
            mid_should_be_split = True 
            
            # Split horizontally (Left/Right)
            left_box = (0, 0, width // 2, height)
            right_box = (width // 2, 0, width, height)
            
            left_img = img.crop(left_box)
            right_img = img.crop(right_box)
            
            # Save as JPEG
            # Use 'rgb' mode just in case
            if left_img.mode != "RGB":
                left_img = left_img.convert("RGB")
            if right_img.mode != "RGB":
                right_img = right_img.convert("RGB")
                
            left_path = "public/images/hero_new.jpg"
            right_path = "public/images/careers_new.jpg"
            
            left_img.save(left_path, "JPEG", quality=95)
            right_img.save(right_path, "JPEG", quality=95)
            
            print(f"Saved: {left_path} ({left_img.size})")
            print(f"Saved: {right_path} ({right_img.size})")
            
    except Exception as e:
        print(f"Error processing image: {e}")
        sys.exit(1)

if __name__ == "__main__":
    split_image()
