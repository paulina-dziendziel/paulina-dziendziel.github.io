from os import listdir
from pathlib import Path 
import re
from itertools import batched
def camel_case(s):
    return re.sub(r"(_|-)+", " ", s).title().replace(" ", "")

def sanitize_name(s):
    return '_' + re.sub(r"( |-)+", "_", s)

imports = []
images = []
image_arrays = []

current_dir = Path('.')
top_dir = Path(__file__).parent.parent / 'src'
for path in sorted(current_dir.iterdir()):
    if path.name.startswith('.'):
        continue
    path = path.resolve()
    filename = path.name
    sanitized_filename = sanitize_name(path.stem)
    location = path.relative_to(top_dir, walk_up=True)
    imports.append(f'import img{sanitized_filename} from "@/{location}";')
    images.append(f'img{sanitized_filename}')

for group in batched(images, 3):
    image_arrays.append('\t[' + ', '.join(group) + ']')

print("\n".join(imports))
print()
print("const galleryImages = [\n" + ",\n".join(image_arrays) + "\n];")