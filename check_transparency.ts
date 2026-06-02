import fs from 'fs';

function checkPngType(filepath: string) {
  try {
    if (!fs.existsSync(filepath)) {
      console.log(`${filepath} does not exist`);
      return;
    }
    const data = fs.readFileSync(filepath);
    // Find IHDR chunk (starts at offset 12)
    // Offset 12: chunk length (4 bytes: 00 00 00 0d)
    // Offset 16: chunk type (4 bytes: "IHDR")
    // Offset 20: width (4 bytes)
    // Offset 24: height (4 bytes)
    // Offset 28: bit depth (1 byte)
    // Offset 29: color type (1 byte)
    //   Color types:
    //     0: Grayscale
    //     2: Truecolor (RGB)
    //     3: Indexed (Palette)
    //     4: Grayscale with alpha
    //     6: Truecolor with alpha (RGBA)
    const colorType = data[29];
    console.log(`${filepath}: Color Type = ${colorType}`);
    if (colorType === 6 || colorType === 3 || colorType === 4) {
      console.log(`-> Natively supports transparency!`);
    } else {
      console.log(`-> Does NOT support transparency (solid background).`);
    }
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

checkPngType('/app/applet/src/assets/images/logo.png');
