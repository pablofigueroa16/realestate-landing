# Plan: Fix Image Loading for Properties 4 and 5

The user reports that images for "Azizi Milan" (Project 4) and "Azizi Venice" (Project 5) are failing to load ("Image not found"), despite being accessible via browser. This suggests issues with file naming, special characters, or path references in the code.

To resolve this reliably, I will standardize the filenames to simple, alphanumeric formats and update the code references.

## Analysis
- **Project 4 (Azizi Milan)**: Uses complex filenames like `2_AZIZI_MILAN_CGI09_Opt_01_12k.png`.
- **Project 5 (Azizi Venice)**: Uses complex filenames like `1_23770800_AZIZI_Balcony_20230908.jpg`.
- **Root Cause**: Potential URL encoding issues, case sensitivity mismatches, or special characters in the long filenames causing `next/image` to fail resolution.

## Tasks

### 1. Rename Images in `public/propiedades/PROYECTO4`
Rename the currently used images to simple sequential names to rule out naming issues:
- `1_Aerial.jpg` -> `1.jpg`
- `2_AZIZI_MILAN_CGI09_Opt_01_12k.png` -> `2.png`
- `3_Balcony_2.jpg` -> `3.jpg`
- `4_CAM14-BBQ.jpg` -> `4.jpg`
- `5_District_Galleria.jpg` -> `5.jpg`

### 2. Rename Images in `public/propiedades/PROYECTO5`
Rename the currently used images:
- `1_23770800_AZIZI_Balcony_20230908.jpg` -> `1.jpg`
- `2_A001_C1.jpg` -> `2.jpg`
- `3_AM04_Boulevard.jpg` -> `3.jpg`
- `4_AV_Boulevard_View.jpg` -> `4.jpg`
- `5_AZIZI_VENICE_BATHROOM_VIEW.jpg` -> `5.jpg`

### 3. Update `src/components/UnitTypesSection.tsx`
- Update the `images` array for `Azizi Milan` to use the new paths (e.g., `/propiedades/PROYECTO4/1.jpg`).
- Update the `images` array for `Azizi Venice` to use the new paths (e.g., `/propiedades/PROYECTO5/1.jpg`).

### 4. Verification
- Verify the file renaming was successful.
- Verify the code uses the correct new paths with matching extensions.
