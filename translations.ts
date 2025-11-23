import type { VideoConfig } from './types';

export type Language = 'en' | 'vi';

const en = {
    // App.tsx
    untitledProject: "Untitled Travel Video",
    generationStatusPreparing: "Preparing to generate scenes...",
    generationStatusRequesting: (batch: number) => `Requesting scene batch #${batch}...`,
    generationIncompleteError: (current: number, total: number) => `Generation incomplete. Only ${current} out of ${total} scenes were generated. You can try to resume.`,
    errorGeneratingImage: "An error occurred while generating the image.",
    generationFailedCanResume: (errorMsg: string) => `Scene generation failed: ${errorMsg}. You can try to resume the process.`,
    errorGeneratingReferenceImage: "Failed to generate the reference image.",
    generatingReferenceImage: "Generating...",

    // Header.tsx
    appTitle: "Travel Video Storyboarder",
    appDescription: "AI-Powered Travel Video Planner",
    newProjectButton: "New Project",
    guideButtonTooltip: "Show User Guide",
    apiKeyButtonTooltip: "Manage API Keys",
    languageLabel: "Language",

    // InputPanel.tsx
    referenceToolsLabel: "Reference Tools",
    addReferenceImageButton: "Upload Image",
    generateReferenceImageButton: "Generate with AI",
    newReferenceImageName: "New Location",
    removeReferenceImageButton: "Remove this image",
    storyIdeaLabel: "Travel Idea / Itinerary",
    suggestIdeaButton: "Suggest an Idea",
    suggestingIdeaButton: "Suggesting...",
    storyIdeaPlaceholder: "Describe your travel video idea. For example: A cinematic journey through the mountains of Ha Giang, Vietnam, focusing on winding roads, local markets, and epic landscapes. OR for Timelapse: Build a wooden stilt house on an empty plot of land, adding a garden and pond. OR for Blueprint: Assemble a futuristic motorcycle from a holographic blueprint, showing each part connecting automatically.",
    generatedScriptLabel: "Generated Script",
    videoSettingsLabel: "Video Settings",
    durationLabel: "Approximate Video Duration (minutes)",
    durationPlaceholder: "e.g., 2",
    durationFeedback: (scenes: number, mins: number, secs: number) => `~${scenes} scenes (~${mins}m ${secs}s).`,
    videoFormatLabel: "Video Pace / Format",
    styleLabel: "Visual Style",
    generateScriptButton: "Generate Script",
    generatingScriptButton: "Generating Script...",
    generateStoryboardButton: "Generate Storyboard",
    generatingStoryboardButton: "Generating Storyboard...",
    generatingStoryboardButtonWithProgress: (current: number, total: number) => `Generating Storyboard... (${current}/${total})`,
    dialogueSettingsLabel: "Dialogue & Voiceover Settings",
    dialogueToggleLabel: "Enable Dialogue / Voiceover",
    dialogueLanguageLabel: "Language",
    dialogueGenderLabel: "Voice Gender",
    dialogueToneLabel: "Voice Tone",
    dialogueTonePlaceholder: "e.g., calm, energetic, mysterious",
    
    // Obsolete character keys replaced or removed.
    noImageGenerated: "No image generated.",
    generateImageButton: "Generate Image",
    generatingImageButton: "Generating...",
    
    // SceneTimeline.tsx
    timelineTitle: "Storyboard Timeline",
    downloadButton: "Download Prompts",
    primaryReferenceLabel: "Reference Image for Batch Generation",
    selectPrimaryReferencePrompt: "Select a reference image",
    generateAllImagesButton: "Generate All Missing Images",
    generatingAllImagesButton: "Generating All...",
    downloadAllImagesButton: "Download All Images (.zip)",
    emptyTimelineTitle: "Your storyboard is empty.",
    emptyTimelineDescription: "Provide a travel idea and generate a script to see your scenes here.",

    // SceneCard.tsx
    sceneLabel: "Scene",
    timeLabel: "Time",
    promptLabel: "Prompt (JSON)",
    promptHelperTooltip: "Toggle prompt helper",
    invalidJsonError: "Invalid JSON format. Please correct it.",
    sceneImageLabel: "Generated Scene Image",
    selectReferenceImageLabel: "Reference Image",
    noReferenceImagesAvailable: "No reference images available",

    // Loader.tsx
    generationComplete: "Generation Complete!",
    generatingScene: (current: number, total: number) => `Generating Scene ${current} of ${total}`,
    loaderText: "Generating...",

    // ConfirmationModal.tsx & App.tsx
    newProjectConfirmationTitle: "Start a New Project?",
    newProjectConfirmationMessage: "This will clear all reference images, ideas, and scenes. Are you sure you want to continue?",
    confirmButton: "Confirm",
    cancelButton: "Cancel",
    resumeGenerationTitle: "Resume Generation?",
    resumeButton: "Resume",
    finishForNowButton: "Finish for Now",

    // GuideModal.tsx
    guideModalTitle: "How to Use Travel Video Storyboarder",
    guideSteps: [
        { title: "Step 1: Set Video Style & Duration", description: "Choose a visual style for travel and the desired length of your video in minutes." },
        { title: "Step 2: Define the Travel Idea", description: "Write your travel concept or click 'Suggest an Idea' to have the AI generate one for you based on your chosen style." },
        { title: "Step 3: Add Reference Tools", description: "Upload one or more high-quality photos, blueprints, or sketches. These will guide the AI's script and image generation." },
        { title: "Step 4: Generate Script", description: "Click 'Generate Script'. The AI will create a detailed script (a sequence of shots) based on your travel idea and duration." },
        { title: "Step 5: Generate Storyboard", description: "With the script in place, click 'Generate Storyboard' to create a detailed, scene-by-scene breakdown with AI image prompts." },
        { title: "Step 6: Generate Scene Images", description: "In the timeline, select a reference image and generate visuals for each scene, either one by one or all at once using the batch tool." },
        { title: "Step 7: Review and Export", description: "Review your storyboard. You can edit the JSON prompts for any scene to fine-tune the visuals, then download all prompts or images." },
    ],
    guideProTipsTitle: "Pro-Tips",
    guideProTips: [
        { title: "Quality References", description: "The better your reference tools (images, blueprints), the more consistent and beautiful your generated scenes will be." },
        { title: "Iterate and Refine", description: "Don't be afraid to edit the script or prompts. The JSON prompts are fully editable to change camera angles, lighting, or motion." },
        { title: "Batch Generation", description: "To quickly visualize your entire storyboard, upload a primary reference image and use the 'Generate All Missing Images' button." },
        { title: "Style Matters", description: "The initial style you choose influences everything from the script to the scene descriptions. Experiment to get unique results." },
        { title: "Link with 'State Transition'", description: "Keep `CAMERA` and `LIGHTING` settings consistent between scenes for a smooth cut. The next scene should start with the previous scene's settings before changing." },
        { title: "Use a Consistent 'Motif'", description: "Use a recurring element (e.g., light from a tablet, a specific color, an object) in consecutive scenes to create continuity." },
        { title: "The 'Cross-Anchor' Formula", description: "End scene A's prompt with an 'anchor' element and start scene B's prompt by referencing that same anchor for a strong connection." },
        { title: "Maintain the Timeline", description: "Avoid abrupt time changes (day/night) between scenes unless you use a logical transition effect." },
    ],

    // PromptHelper.tsx
    promptHelperTitle: "Prompt Quick-Adds",
    promptHelperTags: {
        camera_angles: {
            group: "Camera Angles",
            tags: [
                { tag: "eye-level shot", desc: "Standard, neutral shot." },
                { tag: "low-angle shot", desc: "Makes subject look powerful." },
                { tag: "high-angle shot", desc: "Makes subject look vulnerable." },
                { tag: "drone shot, aerial view", desc: "High overhead shot."},
                { tag: "fly-through", desc: "Camera moves through the environment."},
                { tag: "close-up", desc: "Focuses on detail/emotion." },
                { tag: "extreme close-up", desc: "Intense focus on a small detail." },
                { tag: "long shot", desc: "Shows the subject in their environment." },
                { tag: "wide shot", desc: "Shows the full landscape."},
                { tag: "point-of-view (POV)", desc: "From a traveler's perspective." },
            ],
        },
        lighting: {
            group: "Lighting",
            tags: [
                { tag: "cinematic lighting", desc: "Dramatic, high-contrast lighting." },
                { tag: "soft lighting", desc: "Even, diffused light with few shadows." },
                { tag: "hard lighting", desc: "Creates sharp, defined shadows." },
                { tag: "dramatic lighting", desc: "High contrast, moody." },
                { tag: "natural lighting", desc: "Light from the sun or moon." },
                { tag: "golden hour", desc: "Warm, soft light near sunrise/sunset." },
                { tag: "blue hour", desc: "Cool, diffused light just before sunrise or after sunset." },
            ],
        },
        styles: {
            group: "Art & Film Styles",
            tags: [
                { tag: "cinematic", desc: "High quality, film-like." },
                { tag: "photorealistic", desc: "As realistic as a photograph." },
                { tag: "National Geographic photography", desc: "Vibrant, high-detail nature shots."},
                { tag: "35mm film", desc: "Classic film look with grain."},
                { tag: "vibrant colors", desc: "Saturated and colorful."},
                { tag: "serene", desc: "Calm and peaceful mood."},
                { tag: "adventurous", desc: "Dynamic and exciting mood."},
            ],
        },
        details: {
            group: "Common Details",
            tags: [
                { tag: "4k", desc: "High resolution." },
                { tag: "8k", desc: "Very high resolution." },
                { tag: "highly detailed", desc: "Adds fine details to the image." },
                { tag: "sharp focus", desc: "Ensures the main subject is clear." },
                { tag: "lens flare", desc: "Adds a cinematic light effect." },
                { tag: "film grain", desc: "Adds a textured, vintage look." },
                { tag: "slow motion", desc: "For dramatic shots."},
                { tag: "epic composition", desc: "For grand, sweeping scenes." },
            ],
        }
    },
    
    // ApiKeyModal.tsx
    apiKeyModalTitle: "Manage API Keys",
    apiKeyModalDescription: "Enter your Google AI Studio API keys, one per line.",
    apiKeyModalPlaceholder: "AIza...\nAIza...\n...",
    apiKeyModalNotice: "The app will automatically use the next key if the current one reaches its quota limit.",
    apiKeyModalSaveButton: "Save Keys",
    
    // GenerateReferenceImageModal.tsx
    generateRefImageModalTitle: "Generate Reference Location",
    generateRefImageModalPromptLabel: "Describe the location or style you want to create",
    generateRefImageModalPromptPlaceholder: "e.g., A serene Japanese zen garden with a koi pond and a stone lantern, photorealistic, 4k.",
    generateRefImageModalGenerateButton: "Generate",

    // Gemini Service System Instructions
    systemInstruction_generateStoryIdea: (style: string) => `You are a creative travel planner and videographer. Your task is to generate a short, compelling itinerary or concept for a travel video.
The idea should be concise (3-5 sentences) and suitable for the visual style of "${style}".
Focus on destinations, key activities, and visual highlights that would look amazing on camera.
The response must be only the story idea text, with no extra formatting or introductory phrases.`,

    systemInstruction_generateScript: (config: VideoConfig) => {
        const imageContextInstruction = `
**IMAGE CONTEXT (CRITICAL):**
You may be provided with one or more reference images along with the text idea. These images are CRUCIAL context. You MUST analyze them and use them to guide the shot list.
- If the style is 'Construction Timelapse' or 'Blueprint Assembly':
  - If TWO images are provided, assume they represent the 'BEFORE' and 'AFTER' states. Your shot list MUST logically bridge the transformation between these two images.
  - If ONE image is provided, assume it's the final product or a blueprint/sketch. Your shot list must describe how to build/assemble it from scratch.
- For all other styles, use the images to understand the specific location, architecture, and mood. Your shot list must describe scenes that could plausibly happen in or around the locations shown in the images. The visual descriptions in your shot list MUST match the style and content of the provided images.
`;
        const dialogueInstruction = config.includeDialogue
          ? `
**DIALOGUE INSTRUCTIONS (CRITICAL):**
The shot list MUST include dialogue or voiceover text where appropriate.
- **Language:** The dialogue/voiceover MUST be written in the language specified by the user: **${config.dialogueLanguage}**.
- **Gender:** The voiceover should be written for a **${config.dialogueGender}** voice.
- **Tone:** The tone of the voice should be **${config.dialogueTone}**.
- **Integration:** Write the dialogue or voiceover on a new line after the visual description for the relevant shot, prefixed with "VOICEOVER:" or a character name.`
          : 'The script must be purely visual, with no dialogue or voiceover. Describe only what is seen and how it is filmed.';

        let styleSpecificInstruction = "";
        const styleLower = config.style.toLowerCase();
        if (styleLower.includes('cinematic travel')) {
            styleSpecificInstruction = `STYLE-SPECIFIC GUIDANCE (Cinematic Travel): Focus on grand, sweeping shots (wide, drone) mixed with intimate details (close-ups). Use cinematic language (e.g., 'epic reveal', 'tracking shot', 'slow-motion'). Lighting is key: emphasize golden hour, lens flares, and dramatic shadows.`;
        } else if (styleLower.includes('handheld travel vlog')) {
            styleSpecificInstruction = `STYLE-SPECIFIC GUIDANCE (Handheld Vlog): Mimic a vlogger's style. Use first-person (POV) shots, selfie-style shots, and shaky, energetic handheld camera movements. The tone should be personal and authentic.`;
        } else if (styleLower.includes('asmr')) {
            styleSpecificInstruction = `STYLE-SPECIFIC GUIDANCE (ASMR): Focus entirely on extreme close-ups of textures and sounds. Describe the sounds in detail (e.g., 'the gentle crackle of a fire', 'the soft sizzle of cooking oil'). Camera movement should be very slow and deliberate.`;
        } else if (styleLower.includes('construction')) {
            styleSpecificInstruction = `
**STYLE-SPECIFIC INSTRUCTION (CONSTRUCTION TIMELAPSE):**
The user has chosen a 'Construction Timelapse' style. The ENTIRE shot list must describe the progressive construction of a single location from a SINGLE, UNCHANGING camera perspective.
- **Shot 1:** The empty location.
- **Subsequent Shots:** Each shot describes a new stage of construction (e.g., foundation, frame, walls, roof, painting).
- **Final Shots:** Describe the addition of surrounding details like gardens, ponds, furniture, and lighting.
- **DO NOT** describe different camera angles or movements. Every shot is from the same static viewpoint. The script must be a list of construction phases.
`;
        } else if (styleLower.includes('first-person warfare')) {
            styleSpecificInstruction = `
**STYLE-SPECIFIC INSTRUCTION (FIRST-PERSON WARFARE):**
The user has chosen a 'First-Person Warfare' style. The entire shot list must describe a continuous, intense sequence of events from the first-person perspective (FPV) of a single soldier.
- **Camera Perspective:** Every shot is from the soldier's point of view (body-cam or helmet cam). Do NOT describe other camera angles like 'wide shot' or 'drone shot'.
- **One-Shot Feel:** The script must be written as if it's one continuous take. The end of one shot should seamlessly lead into the beginning of the next.
- **Narrative Arc:** Create a clear, short story. For example: engaging an enemy, achieving an objective, and regrouping with allies.
- **Environment:** The setting is an active battlefield. Describe the chaos and action vividly.
`;
        } else if (styleLower.includes('blueprint assembly')) {
            styleSpecificInstruction = `
**STYLE-SPECIFIC INSTRUCTION (BLUEPRINT ASSEMBLY):**
You are an expert mechanical design engineer. The user has provided a blueprint/technical drawing image. Your task is to create a detailed, step-by-step assembly sequence based **exclusively** on this image.

**CRITICAL ANALYSIS & LOGIC:**
1.  **Deconstruct the Blueprint:** First, mentally deconstruct the final product shown in the image into its primary components. Identify the core frame/chassis, internal mechanisms (engine, circuits, gears), and external parts (casing, wheels, panels).
2.  **Establish 'Inside-Out' Assembly Order:** Your shot list MUST follow a strict, logical "inside-out" assembly sequence. This is non-negotiable.
    - **Shot 1:** Always begin with the blueprint itself, displayed as a 2D drawing or a 3D hologram.
    - **Core Structure:** The next shots must build the foundational frame or chassis.
    - **Internal Components:** After the frame, add the main internal components (e.g., the engine, power core, motherboard).
    - **External Components:** Once the internals are in place, add the external body panels, wheels, limbs, etc.
    - **Finishing Touches:** The final shots should add small details like lights, decals, and end with the product activating (e.g., lights turning on).
3.  **Static Camera:** The entire sequence must be from a SINGLE, UNCHANGING camera perspective. Do not describe pans, zooms, or angle changes. The product assembles in the center of the frame.
4.  **Visual Fidelity:** Each shot description must visually correspond to the shapes and details seen in the provided blueprint image.
`;
        }

        const numberOfScenes = Math.round(config.duration / 8);

        return `You are a professional travel videographer and scriptwriter. Your task is to write a descriptive shot list based on a travel idea and video configuration.
${imageContextInstruction}
The final video will be approximately ${config.duration} seconds long.
The shot list should describe a sequence of distinct shots, specifying camera angles and movement.
${dialogueInstruction}

**Pacing and Shot Count Guidance (CRITICAL):**
You must adjust the number of shots in your list based on the video format to match the total duration.
**You MUST generate EXACTLY ${numberOfScenes} distinct shots.** This is a strict requirement to match the requested video duration. Each shot will become one 8-second scene.

**CRITICAL INSTRUCTION:** You MUST ensure the shot list contains enough UNIQUE content to fill the entire ${config.duration} seconds. Do not loop or repeat the same shot or location. The journey must expand and progress based on the theme.

The output must be ONLY the shot list text. Do not include any introductory phrases, summaries, or explanations.
REMEMBER: The most critical rule is to generate EXACTLY ${numberOfScenes} shots. Do not generate more or less.`;
    },

    systemInstruction_generateScenes: (config: VideoConfig, isContinuation: boolean) => {
        const sceneDuration = 8;
        const styleLower = config.style.toLowerCase();
        
        const isPov = styleLower.includes('pov');
        const isHyperColor = styleLower.includes('hyper color');
        const isSurvival = styleLower.includes('wilderness survival');
        const isConstruction = styleLower.includes('construction');
        const isWarfare = styleLower.includes('first-person warfare');
        const isBlueprint = styleLower.includes('blueprint assembly');

        let pacingInstruction = "";
        switch (config.format) {
            case 'trailer':
                pacingInstruction = `**Pacing is FAST ('trailer').** You must create high-energy scenes. If the shot list contains many short actions, you MUST combine several of them into a single ${sceneDuration}-second scene to maintain a rapid pace. A single line item from the shot list might only represent 2-4 seconds of action.`;
                break;
            case 'longform':
                pacingInstruction = `**Pacing is SLOW ('longform').** You must create atmospheric, lingering scenes. You should expand a single point or moment from the shot list to fill the entire ${sceneDuration}-second scene. Emphasize slow, deliberate camera movements and absorbing the environment.`;
                break;
            case 'short':
            default:
                pacingInstruction = `**Pacing is STANDARD ('short').** A single ${sceneDuration}-second scene should comfortably cover one or two points from the shot list. The flow should feel natural and unhurried, but still engaging.`;
                break;
        }
        
        const dialogueInstruction = config.includeDialogue
          ? `- \`dialogue\`: (String) Extract the corresponding dialogue or voiceover for this scene from the shot list. The language must be **${config.dialogueLanguage}**. The tone should be consistent with **'${config.dialogueTone}'** and suitable for a **'${config.dialogueGender}'** speaker. If there's no dialogue for this specific scene in the shot list, use an empty string "".`
          : `- \`dialogue\`: (String) MUST be an empty string "". No dialogue.`;

        let extraEnvInstruction = "";
        if (isHyperColor) {
            extraEnvInstruction = " IMPORTANT: The visual style is HYPER COLOR FANTASY. The sky MUST be vivid, lively, and dynamic. Use 'wholesome' tones and saturated colors. The landscape must be ENDLESS and constantly changing. Never show the exact same view twice." 
        } else if (isSurvival) {
            extraEnvInstruction = " IMPORTANT: The visual style is WILDERNESS SURVIVAL. The environment must feel raw, untamed, and remote. Emphasize natural textures like rock, dirt, dense foliage, and rough bark. Avoid any signs of modern civilization."
        } else if (isWarfare) {
            extraEnvInstruction = " IMPORTANT: The visual style is FIRST-PERSON WARFARE. The environment is a chaotic, active battlefield. Include elements like smoke, distant explosions, debris, trenches, and ruined structures. The atmosphere is tense and action-packed."
        } else if (isBlueprint) {
             extraEnvInstruction = " IMPORTANT: The visual style is BLUEPRINT ASSEMBLY. The environment must be a clean, futuristic, or technical setting, like a laboratory, workshop, or a neutral studio background with grid lines. The blueprint can persist as a faint holographic overlay during assembly to guide the parts."
        }
        
        let extraMotionInstruction = "";
        if (isWarfare) {
            extraMotionInstruction = " CRITICAL: The motion must represent the soldier's direct actions from a first-person view. Describe head movements (looking left/right), body movements (running, crouching), and interactions (aiming a weapon). The action MUST be continuous and seamless from one scene to the next. Example: '(0-2s): Head snaps right towards an explosion at (X:90, Y:50). (2-8s): Runs forward, camera shaking violently, towards cover at (X:50, Z:midground).'"
        } else if (isPov) {
             extraMotionInstruction = " Ensure the camera movement strictly mimics a First-Person View (POV) of a traveler moving through the space (mostly Z-axis movement, e.g., walking forward). The movement must feel continuous and forward-momentum based."
        } else if (isConstruction || isBlueprint) {
             extraMotionInstruction = " CRITICAL: The camera MUST be completely static. All motion should come from elements appearing or changing within the frame. Describe this as 'No camera motion'."
        }

        let extraCameraInstruction = "";
        if (isSurvival) {
            extraCameraInstruction = "Incorporate handheld, slightly shaky camera work to create a sense of realism and urgency."
        } else if (isConstruction) {
            extraCameraInstruction = "CRITICAL: This is a CONSTRUCTION TIMELAPSE. The 'camera' prompt MUST be IDENTICAL for every single scene. Use a static, locked-off shot like 'Static wide shot, eye-level, locked-off camera' and DO NOT change it between scenes.";
        } else if (isWarfare) {
            extraCameraInstruction = "CRITICAL: This is a FIRST-PERSON WARFARE sequence. The 'camera' prompt MUST be IDENTICAL for every single scene to maintain the 'one-shot' FPV feel. Use a consistent description like 'First-person perspective (FPV) from a soldier's helmet cam, shaky, body-cam footage, realistic motion blur' and DO NOT change it between scenes.";
        } else if (isBlueprint) {
            extraCameraInstruction = "CRITICAL: This is a BLUEPRINT ASSEMBLY sequence. The 'camera' prompt MUST be IDENTICAL for every single scene. Use a static, locked-off shot like 'Static medium shot, eye-level, locked-off on a central assembly point' and DO NOT change it between scenes.";
        }
        
        let extraNegativePrompts = "";
        if (isSurvival) {
            extraNegativePrompts = `In addition to the standard ones, also include "cities", "roads", "vehicles", "plastic", "man-made structures".`;
        } else if (isWarfare) {
            extraNegativePrompts = `In addition to the standard ones, also include "calm", "peaceful", "tourists", "clean environment", "third-person view".`;
        } else if (isBlueprint) {
            extraNegativePrompts = `In addition to the standard ones, also include "people", "organic elements", "clutter", "messy background".`;
        }

        let antiRepetition = "CRITICAL: Ensure the narrative EXPANDS. Do not repeat scenes or loop back to previous locations. Each scene must offer a new perspective or a new part of the journey.";
        if (isConstruction) {
            antiRepetition = "CRITICAL: Ensure the construction PROGRESSES. Do not repeat a stage. Each scene must build upon the last, adding new elements or completing parts of the structure until the project is finished.";
        } else if (isWarfare) {
            antiRepetition = "CRITICAL: Ensure the narrative action sequence PROGRESSES. Do not repeat actions or stay in one place. Each scene must advance the short story (e.g., from conflict, to objective, to resolution).";
        } else if (isBlueprint) {
            antiRepetition = `CRITICAL: Ensure the assembly PROGRESSES LOGICALLY FROM THE INSIDE OUT. Do not repeat an assembly stage. Each scene must build upon the last. The 'description' must use the 'Cross-Anchor' technique: it must explicitly state which new part is being added AND how it connects to the components from the previous scene's final state.`;
        }


        return `You are a Visual Storyboard AI specializing in travel cinematography. Your task is to break down a shot list into a series of detailed 8-second scenes for an image generation model.
You will receive a shot list and video configuration. You must generate a JSON array of scene objects.

${pacingInstruction}

**LANGUAGE REQUIREMENTS (ABSOLUTELY CRITICAL):**
- ALL string values in the entire JSON output (description, style, camera, lighting, motion, audio, etc.) MUST be written in **English**. English is the required language for the video generation model.

**Professional Cinematography & Editing Logic (ABSOLUTELY CRITICAL):**
To create a professional and seamless video, you MUST adhere to the following filmmaking principles for EVERY scene transition. The starting frame of the current scene MUST logically and visually connect to the ending frame of the previous scene.

1.  **"Cross-Anchor" Formula (MANDATORY):** This is the most important rule.
    - The \`description\` of the PREVIOUS scene must end with a clear "anchor" (an object, a character's gaze, a specific motion).
    - The \`description\` of the CURRENT scene MUST begin by referencing that exact anchor, creating an unbreakable link.
    - Example:
      - Scene 5 description ends: "...the character looks up towards the distant mountain peak." (Anchor: mountain peak)
      - Scene 6 description begins: "From the mountain peak, the view reveals a winding river below."

2.  **"State Transition" (Match Cut):** For smooth, almost invisible cuts, you should strongly prefer to carry over settings from the previous scene.
    - The \`camera\` and \`lighting\` values for the CURRENT scene should, by default, be IDENTICAL to the previous scene's values.
    - Only change them if the script explicitly calls for a dramatic shift. If you must change them, describe the transition within the \`motion\` or \`description\` fields (e.g., "the camera slowly zooms out," "the light gradually fades").

3.  **Consistent "Motif":** Maintain a recurring visual or conceptual element across a sequence of scenes to tie them together. This could be a color, an object, a type of light, or a sound described in the \`audio\` field.

4.  **Timeline Consistency:** Do not make abrupt changes in the time of day (e.g., from bright daylight to night) between consecutive scenes unless a clear and logical transition (like a time-lapse) is explicitly described in the script.

**Coordinate System & Motion (CRITICAL):**
You MUST describe camera and element motion using a coordinate grid.
- **X-axis (0-100):** Represents the horizontal position, from left (0) to right (100).
- **Y-axis (0-100):** Represents the vertical position, from bottom (0) to top (100).
- **Z-axis (depth):** Use strings: 'foreground', 'midground', 'background'.

Each scene object must have the following structure and adhere to these strict rules:
- \`scene_id\`: (Integer) The sequential number of the scene, starting from 1.
- \`time\`: (String) The timestamp for the scene in "MM:SS" format. Each scene is ${sceneDuration} seconds long. (e.g., scene 1 is "00:00", scene 2 is "00:08").
- \`prompt\`: (Object) A detailed prompt for the image generation model, containing the following fields:
- \`description\`: (String) A one-sentence, vivid description of the key shot in **English**. ${antiRepetition}
- \`style\`: (String) The primary visual style for the scene. This should almost always be "${config.style}".
- \`camera\`: (String) Describe the camera shot type, angle, and any movement in **English**. Use terms like 'wide angle', 'drone shot', 'flycam', 'slow pan left'. ${extraCameraInstruction}
- \`lighting\`: (String) Describe the lighting style in **English** (e.g., 'golden hour', 'bright midday sun', 'natural lighting').
- \`environment\`: (String) Detail the background, setting, and atmosphere in **English**.${extraEnvInstruction}
- \`elements\`: (Array of Strings) List key objects or environmental features present in the scene in **English**.
- \`motion\`: (String) **MUST USE COORDINATES (unless static).** ${extraMotionInstruction} A step-by-step description of all camera movements within the 8-second shot, relative to the coordinate system, in **English**. Example: "(0-8s): Slow flycam shot moving forward from (X:50, Y:80, Z:background) to (X:50, Y:20, Z:midground), revealing the valley below."
${dialogueInstruction}
- \`audio\`: (String) **DO NOT mention music.** Describe only the realistic, vivid, and immersive ambient sounds of the location in **English**. Focus on hyper-realistic and detailed sounds. Example: "The gentle lapping of water against the shore, a distant seagull's cry, the soft crunch of sand underfoot, a light breeze rustling through palm leaves."
- \`ending\`: (String) Describe the final frame or transition of the scene in **English**.
- \`text\`: (String) Usually "none".
- \`keywords\`: (Array of Strings) List 5-10 relevant keywords in **English** (e.g., 'travel', 'landscape', 'drone', 'cinematic', 'nature').
- \`aspect_ratio\`: (String) Must be "16:9".
- \`duration_seconds\`: (Integer) Must be ${sceneDuration}.
- \`fps\`: (Integer) Must be 24.
- \`quality\`: (String) Must be "high".
- \`negative_prompts\`: (Array of Strings) List things to avoid in **English**, like "people", "buildings", "text", "logos". ${extraNegativePrompts}

**IMPORTANT:** Ensure the final output is a single, perfectly formatted JSON object starting with \`{\` and ending with \`}\`, containing the 'scenes' array. Do not add any text or markdown before or after the JSON.`;
    },
    
    systemInstruction_generateCharacters: (duration: number) => ``,
    systemInstruction_generateCharacterFromImage: () => ``,
};

const vi = {
    // App.tsx
    untitledProject: "Video Du lịch Chưa có tên",
    generationStatusPreparing: "Đang chuẩn bị tạo các phân cảnh...",
    generationStatusRequesting: (batch: number) => `Đang yêu cầu lô phân cảnh #${batch}...`,
    generationIncompleteError: (current: number, total: number) => `Tạo chưa hoàn tất. Chỉ có ${current} trên tổng số ${total} phân cảnh được tạo. Bạn có thể thử tiếp tục.`,
    errorGeneratingImage: "Đã xảy ra lỗi khi tạo hình ảnh.",
    generationFailedCanResume: (errorMsg: string) => `Tạo phân cảnh thất bại: ${errorMsg}. Bạn có thể thử tiếp tục quá trình.`,
    errorGeneratingReferenceImage: "Tạo ảnh tham chiếu thất bại.",
    generatingReferenceImage: "Đang tạo...",

    // Header.tsx
    appTitle: "Storyboard Video Du lịch",
    appDescription: "Lên kế hoạch video du lịch bằng AI",
    newProjectButton: "Dự án mới",
    guideButtonTooltip: "Hiển thị hướng dẫn sử dụng",
    apiKeyButtonTooltip: "Quản lý API Key",
    languageLabel: "Ngôn ngữ",

    // InputPanel.tsx
    referenceToolsLabel: "Công cụ tham chiếu",
    addReferenceImageButton: "Tải ảnh lên",
    generateReferenceImageButton: "Tạo bằng AI",
    newReferenceImageName: "Địa điểm mới",
    removeReferenceImageButton: "Xóa ảnh này",
    storyIdeaLabel: "Ý tưởng du lịch / Lịch trình",
    suggestIdeaButton: "Gợi ý ý tưởng",
    suggestingIdeaButton: "Đang gợi ý...",
    storyIdeaPlaceholder: "Mô tả ý tưởng video du lịch của bạn. VD: Một hành trình điện ảnh qua núi Hà Giang, tập trung vào đường đèo, chợ địa phương. HOẶC cho Timelapse: Xây một nhà sàn gỗ trên đất trống, thêm vườn rau và hồ cá. HOẶC cho Bản vẽ: Lắp ráp một chiếc xe máy tương lai từ bản vẽ hologram, hiển thị từng bộ phận tự động kết nối.",
    generatedScriptLabel: "Kịch bản đã tạo",
    videoSettingsLabel: "Cài đặt video",
    durationLabel: "Thời lượng video ước tính (phút)",
    durationPlaceholder: "VD: 2",
    durationFeedback: (scenes: number, mins: number, secs: number) => `~${scenes} phân cảnh (~${mins} phút ${secs} giây).`,
    videoFormatLabel: "Nhịp độ / Định dạng video",
    styleLabel: "Phong cách hình ảnh",
    generateScriptButton: "Tạo kịch bản",
    generatingScriptButton: "Đang tạo kịch bản...",
    generateStoryboardButton: "Tạo bảng phân cảnh",
    generatingStoryboardButton: "Đang tạo bảng phân cảnh...",
    generatingStoryboardButtonWithProgress: (current: number, total: number) => `Đang tạo bảng phân cảnh... (${current}/${total})`,
    dialogueSettingsLabel: "Cài đặt Đối thoại & Lời dẫn",
    dialogueToggleLabel: "Bật Đối thoại / Lời dẫn",
    dialogueLanguageLabel: "Ngôn ngữ",
    dialogueGenderLabel: "Giới tính Giọng nói",
    dialogueToneLabel: "Tông giọng",
    dialogueTonePlaceholder: "VD: bình tĩnh, năng động, bí ẩn",
    
    // Obsolete character keys
    noImageGenerated: "Chưa có ảnh nào được tạo.",
    generateImageButton: "Tạo ảnh",
    generatingImageButton: "Đang tạo...",
    
    // SceneTimeline.tsx
    timelineTitle: "Dòng thời gian phân cảnh",
    downloadButton: "Tải xuống prompt",
    primaryReferenceLabel: "Ảnh tham chiếu để tạo hàng loạt",
    selectPrimaryReferencePrompt: "Chọn một ảnh tham chiếu",
    generateAllImagesButton: "Tạo tất cả hình ảnh còn thiếu",
    generatingAllImagesButton: "Đang tạo tất cả...",
    downloadAllImagesButton: "Tải tất cả hình ảnh (.zip)",
    emptyTimelineTitle: "Bảng phân cảnh của bạn trống.",
    emptyTimelineDescription: "Cung cấp ý tưởng du lịch và tạo một kịch bản để xem các cảnh của bạn ở đây.",

    // SceneCard.tsx
    sceneLabel: "Phân cảnh",
    timeLabel: "Thời gian",
    promptLabel: "Prompt (JSON)",
    promptHelperTooltip: "Bật/tắt trợ giúp prompt",
    invalidJsonError: "Định dạng JSON không hợp lệ. Vui lòng sửa lại.",
    sceneImageLabel: "Hình ảnh phân cảnh đã tạo",
    selectReferenceImageLabel: "Ảnh tham chiếu",
    noReferenceImagesAvailable: "Không có ảnh tham chiếu",

    // Loader.tsx
    generationComplete: "Tạo hoàn tất!",
    generatingScene: (current: number, total: number) => `Đang tạo phân cảnh ${current} trên ${total}`,
    loaderText: "Đang tạo...",

    // ConfirmationModal.tsx & App.tsx
    newProjectConfirmationTitle: "Bắt đầu dự án mới?",
    newProjectConfirmationMessage: "Hành động này sẽ xóa tất cả hình ảnh tham chiếu, ý tưởng và phân cảnh hiện tại. Bạn có chắc chắn muốn tiếp tục không?",
    confirmButton: "Xác nhận",
    cancelButton: "Hủy bỏ",
    resumeGenerationTitle: "Tiếp tục tạo?",
    resumeButton: "Tiếp tục",
    finishForNowButton: "Để sau",

    // GuideModal.tsx
    guideModalTitle: "Hướng dẫn sử dụng Storyboarder Video Du lịch",
    guideSteps: [
        { title: "Bước 1: Cài đặt Phong cách & Thời lượng", description: "Chọn một phong cách hình ảnh du lịch và thời lượng video mong muốn." },
        { title: "Bước 2: Xác định Ý tưởng Du lịch", description: "Viết ý tưởng du lịch của bạn hoặc nhấp 'Gợi ý ý tưởng' để AI tạo giúp bạn." },
        { title: "Bước 3: Thêm Công cụ tham chiếu", description: "Tải lên một hoặc nhiều ảnh, bản vẽ chất lượng cao về địa điểm hoặc phong cách bạn muốn. Điều này sẽ hướng dẫn AI tạo kịch bản và hình ảnh." },
        { title: "Bước 4: Tạo Kịch bản", description: "Nhấp vào 'Tạo kịch bản'. AI sẽ tạo ra một kịch bản chi tiết (danh sách các cảnh quay) dựa trên ý tưởng và thời lượng của bạn." },
        { title: "Bước 5: Tạo Bảng phân cảnh", description: "Khi đã có kịch bản, hãy nhấp vào 'Tạo Bảng phân cảnh' để tạo ra các prompt chi tiết cho từng cảnh." },
        { title: "Bước 6: Tạo Hình ảnh Phân cảnh", description: "Trong dòng thời gian, chọn một ảnh tham chiếu và tạo hình ảnh cho từng cảnh, có thể tạo từng cái một hoặc hàng loạt." },
        { title: "Bước 7: Xem lại và Xuất", description: "Xem lại bảng phân cảnh của bạn. Bạn có thể chỉnh sửa prompt JSON để tinh chỉnh hình ảnh, sau đó tải xuống tất cả prompt hoặc hình ảnh." },
    ],
    guideProTipsTitle: "Mẹo chuyên nghiệp",
    guideProTips: [
        { title: "Tham chiếu chất lượng", description: "Công cụ tham chiếu (ảnh, bản vẽ) của bạn càng tốt, các cảnh được tạo ra sẽ càng nhất quán và đẹp mắt." },
        { title: "Lặp lại và Tinh chỉnh", description: "Đừng ngại chỉnh sửa kịch bản hoặc prompt. Prompt JSON hoàn toàn có thể chỉnh sửa để thay đổi góc máy, ánh sáng hoặc chuyển động." },
        { title: "Tạo hàng loạt", description: "Để nhanh chóng hình dung toàn bộ kịch bản phân cảnh, hãy tải lên một ảnh tham chiếu chính và sử dụng nút 'Tạo tất cả hình ảnh còn thiếu'." },
        { title: "Phong cách rất quan trọng", description: "Phong cách ban đầu bạn chọn ảnh hưởng đến mọi thứ. Hãy thử nghiệm với các phong cách khác nhau để có kết quả độc đáo." },
        { title: "Liên kết bằng 'Trạng thái chuyển tiếp' (State Transition)", description: "Giữ nguyên `CAMERA` và `LIGHTING` giữa 2 cảnh để nối mượt. Cảnh sau nên bắt đầu bằng thông số của cảnh trước rồi mới chuyển đổi dần." },
        { title: "Dùng 'Motif' (Yếu tố lặp lại) xuyên suốt", description: "Sử dụng một yếu tố lặp lại (ví dụ: ánh sáng từ tablet, một màu sắc, một vật thể) trong các cảnh liên tiếp để tạo sự liền mạch." },
        { title: "Công thức 'Neo chéo' (Cross-Anchor)", description: "Kết thúc prompt của cảnh A bằng một yếu tố 'neo' và bắt đầu prompt của cảnh B bằng cách nhắc lại chính 'neo' đó để tạo liên kết mạnh." },
        { title: "Giữ vững Dòng thời gian", description: "Tránh thay đổi đột ngột thời gian (ngày/đêm) giữa các cảnh trừ khi có hiệu ứng chuyển tiếp hợp lý." },
    ],
    
    // PromptHelper.tsx is mostly English terms, so translation is minimal.
    promptHelperTitle: "Thêm nhanh Prompt",
    promptHelperTags: {
        camera_angles: { group: "Góc máy", tags: en.promptHelperTags.camera_angles.tags },
        lighting: { group: "Ánh sáng", tags: en.promptHelperTags.lighting.tags },
        styles: { group: "Phong cách Nghệ thuật & Phim", tags: en.promptHelperTags.styles.tags },
        details: { group: "Chi tiết phổ biến", tags: en.promptHelperTags.details.tags },
    },
    
    // ApiKeyModal.tsx
    apiKeyModalTitle: "Quản lý API Key",
    apiKeyModalDescription: "Nhập các API key Google AI Studio của bạn, mỗi key một dòng.",
    apiKeyModalPlaceholder: "AIza...\nAIza...\n...",
    apiKeyModalNotice: "Ứng dụng sẽ tự động sử dụng key tiếp theo nếu key hiện tại hết dung lượng.",
    apiKeyModalSaveButton: "Lưu Keys",
    
    // GenerateReferenceImageModal.tsx
    generateRefImageModalTitle: "Tạo Địa điểm Tham chiếu",
    generateRefImageModalPromptLabel: "Mô tả địa điểm hoặc phong cách bạn muốn tạo",
    generateRefImageModalPromptPlaceholder: "VD: Một khu vườn thiền Nhật Bản thanh tịnh với hồ cá koi và đèn đá, ảnh thực, 4k.",
    generateRefImageModalGenerateButton: "Tạo",

    // Gemini Service System Instructions (VI)
    systemInstruction_generateStoryIdea: (style: string) => `Bạn là một người lập kế hoạch du lịch và nhà quay phim sáng tạo. Nhiệm vụ của bạn là tạo ra một lịch trình hoặc ý tưởng ngắn gọn, hấp dẫn cho một video du lịch.
Ý tưởng nên súc tích (3-5 câu) và phù hợp với phong cách hình ảnh của "${style}".
Tập trung vào các điểm đến, hoạt động chính và các điểm nhấn hình ảnh sẽ trông tuyệt vời trên máy quay.
Phản hồi chỉ được là văn bản ý tưởng, không có định dạng thừa hoặc các cụm từ giới thiệu.`,

    systemInstruction_generateScript: (config: VideoConfig) => {
        const imageContextInstruction = `
**BỐI CẢNH HÌNH ẢNH (QUAN TRỌNG):**
Bạn có thể được cung cấp một hoặc nhiều hình ảnh tham chiếu cùng với ý tưởng văn bản. Những hình ảnh này là bối cảnh CỰC KỲ QUAN TRỌNG. Bạn PHẢI phân tích chúng và sử dụng chúng để định hướng danh sách cảnh quay.
- Nếu phong cách là 'Timelapse Xây dựng' hoặc 'Sản xuất theo Bản vẽ':
  - Nếu có HAI hình ảnh được cung cấp, hãy giả định chúng đại diện cho trạng thái 'TRƯỚC' và 'SAU'. Danh sách cảnh quay của bạn PHẢI bắc cầu một cách hợp lý cho sự biến đổi giữa hai hình ảnh này.
  - Nếu có MỘT hình ảnh được cung cấp, hãy giả định đó là sản phẩm cuối cùng hoặc một bản vẽ/phác thảo. Danh sách cảnh quay của bạn phải mô tả cách xây dựng/lắp ráp nó từ đầu.
- Đối với tất cả các phong cách khác, hãy sử dụng hình ảnh để hiểu vị trí, kiến trúc và tâm trạng cụ thể. Danh sách cảnh quay của bạn phải mô tả các cảnh có thể xảy ra một cách hợp lý trong hoặc xung quanh các địa điểm được hiển thị trong hình ảnh. Các mô tả hình ảnh trong danh sách cảnh quay của bạn PHẢI khớp với phong cách và nội dung của hình ảnh được cung cấp.
`;
        const dialogueInstruction = config.includeDialogue
          ? `
**HƯỚNG DẪN VỀ LỜI THOẠI (QUAN TRỌNG):**
Danh sách cảnh quay PHẢI bao gồm lời thoại hoặc lời dẫn ở những chỗ phù hợp.
- **Ngôn ngữ:** Lời thoại/lời dẫn PHẢI được viết bằng ngôn ngữ do người dùng chỉ định: **${config.dialogueLanguage}**.
- **Giới tính:** Lời dẫn nên được viết cho một giọng **${config.dialogueGender}**.
- **Tông giọng:** Tông giọng của lời nói phải là **${config.dialogueTone}**.
- **Tích hợp:** Viết lời thoại hoặc lời dẫn trên một dòng mới sau phần mô tả hình ảnh cho cảnh quay có liên quan, có tiền tố là "VOICEOVER:" hoặc tên nhân vật.`
          : 'Kịch bản phải hoàn toàn bằng hình ảnh, không có đối thoại hoặc lời dẫn. Chỉ mô tả những gì được thấy và cách nó được quay.';

        let styleSpecificInstruction = "";
        const styleLower = config.style.toLowerCase();
        if (styleLower.includes('cinematic travel')) {
            styleSpecificInstruction = `HƯỚNG DẪN THEO PHONG CÁCH (Du lịch điện ảnh): Tập trung vào các cảnh quay hoành tráng, bao quát (rộng, drone) kết hợp với các chi tiết cận cảnh (close-ups). Sử dụng ngôn ngữ điện ảnh (ví dụ: 'cảnh quay tiết lộ hùng vĩ', 'cảnh quay theo dấu', 'chuyển động chậm'). Ánh sáng là yếu tố then chốt: nhấn mạnh giờ vàng, hiệu ứng lóa ống kính và bóng đổ ấn tượng.`;
        } else if (styleLower.includes('handheld travel vlog')) {
            styleSpecificInstruction = `HƯỚNG DẪN THEO PHONG CÁCH (Vlog du lịch cầm tay): Bắt chước phong cách của một vlogger. Sử dụng các cảnh quay góc nhìn thứ nhất (POV), cảnh quay kiểu selfie và các chuyển động máy quay cầm tay rung lắc, đầy năng lượng. Tông điệu nên cá nhân và chân thực.`;
        } else if (styleLower.includes('asmr')) {
            styleSpecificInstruction = `HƯỚNG DẪN THEO PHONG CÁCH (ASMR): Tập trung hoàn toàn vào các cảnh quay cận cảnh cực độ về kết cấu và âm thanh. Mô tả chi tiết các âm thanh (ví dụ: 'tiếng lách tách nhẹ của lửa', 'tiếng xèo xèo nhẹ của dầu ăn'). Chuyển động máy quay phải rất chậm và có chủ ý.`;
        } else if (styleLower.includes('construction')) {
            styleSpecificInstruction = `
**HƯỚNG DẪN THEO PHONG CÁCH (TIMELAPSE XÂY DỰNG):**
Người dùng đã chọn phong cách 'Timelapse Xây dựng'. TOÀN BỘ danh sách cảnh quay phải mô tả quá trình xây dựng lũy tiến của một địa điểm duy nhất từ một góc máy DUY NHẤT, KHÔNG THAY ĐỔI.
- **Cảnh 1:** Địa điểm trống.
- **Các cảnh tiếp theo:** Mỗi cảnh mô tả một giai đoạn xây dựng mới (ví dụ: móng, khung, tường, mái, sơn).
- **Các cảnh cuối:** Mô tả việc thêm các chi tiết xung quanh như vườn, ao, nội thất và ánh sáng.
- **KHÔNG** mô tả các góc máy hoặc chuyển động máy quay khác nhau. Mọi cảnh đều từ cùng một điểm nhìn tĩnh. Kịch bản phải là một danh sách các giai đoạn xây dựng.
`;
        } else if (styleLower.includes('first-person warfare')) {
             styleSpecificInstruction = `
**HƯỚNG DẪN THEO PHONG CÁCH (CHIẾN TRANH GÓC NHÌN THỨ NHẤT):**
Người dùng đã chọn phong cách 'Chiến tranh Góc nhìn Thứ nhất'. Toàn bộ danh sách cảnh quay phải mô tả một chuỗi sự kiện liên tục, kịch tính từ góc nhìn thứ nhất (FPV) của một người lính.
- **Góc máy:** Mọi cảnh quay đều từ góc nhìn của người lính (body-cam hoặc helmet cam). KHÔNG mô tả các góc máy khác như 'cảnh rộng' hoặc 'cảnh drone'.
- **Cảm giác One-Shot:** Kịch bản phải được viết như thể đó là một cảnh quay liên tục. Kết thúc của một cảnh phải chuyển tiếp liền mạch vào đầu cảnh tiếp theo.
- **Cốt truyện:** Tạo một câu chuyện ngắn, rõ ràng. Ví dụ: giao tranh với kẻ thù, hoàn thành mục tiêu và tập hợp lại với đồng đội.
- **Môi trường:** Bối cảnh là một chiến trường đang diễn ra. Mô tả sự hỗn loạn và hành động một cách sống động.
`;
        } else if (styleLower.includes('blueprint assembly')) {
             styleSpecificInstruction = `
**HƯỚNG DẪN THEO PHONG CÁCH (SẢN XUẤT THEO BẢN VẼ):**
Bạn là một kỹ sư thiết kế cơ khí chuyên nghiệp. Người dùng đã cung cấp một hình ảnh bản vẽ kỹ thuật. Nhiệm vụ của bạn là tạo ra một chuỗi lắp ráp chi tiết, từng bước dựa **hoàn toàn** vào hình ảnh này.

**PHÂN TÍCH VÀ LOGIC QUAN TRỌNG:**
1.  **Phân tích Bản vẽ:** Đầu tiên, hãy phân tích sản phẩm cuối cùng trong hình ảnh thành các bộ phận chính. Xác định khung sườn cốt lõi, các cơ cấu bên trong (động cơ, mạch điện, bánh răng) và các bộ phận bên ngoài (vỏ, bánh xe, tấm ốp).
2.  **Thiết lập Trình tự Lắp ráp 'Từ trong ra ngoài':** Danh sách cảnh quay của bạn BẮT BUỘC phải tuân theo một trình tự lắp ráp "từ trong ra ngoài" nghiêm ngặt và hợp lý. Điều này không thể thay đổi.
    - **Cảnh 1:** Luôn bắt đầu với chính bản vẽ, được hiển thị dưới dạng 2D hoặc hologram 3D.
    - **Cấu trúc lõi:** Các cảnh tiếp theo phải xây dựng khung sườn nền tảng.
    - **Các bộ phận bên trong:** Sau khung sườn, hãy thêm các bộ phận chính bên trong (ví dụ: động cơ, lõi năng lượng, bo mạch chủ).
    - **Các bộ phận bên ngoài:** Khi các bộ phận bên trong đã vào vị trí, hãy thêm các tấm vỏ bên ngoài, bánh xe, tay chân, v.v.
    - **Hoàn thiện:** Các cảnh cuối cùng nên thêm các chi tiết nhỏ như đèn, đề can và kết thúc bằng việc sản phẩm được kích hoạt (ví dụ: đèn bật sáng).
3.  **Máy quay tĩnh:** Toàn bộ chuỗi phải được quay từ một góc máy DUY NHẤT, KHÔNG THAY ĐỔI. Không mô tả các động tác lia máy, thu phóng hoặc thay đổi góc. Sản phẩm được lắp ráp ở trung tâm khung hình.
4.  **Trung thực với hình ảnh:** Mỗi mô tả cảnh quay phải tương ứng về mặt hình ảnh với các hình dạng và chi tiết được thấy trong hình ảnh bản vẽ được cung cấp.
`;
        }

        const numberOfScenes = Math.round(config.duration / 8);
        
        return `Bạn là một nhà quay phim và biên kịch du lịch chuyên nghiệp. Nhiệm vụ của bạn là viết một danh sách cảnh quay mô tả dựa trên ý tưởng du lịch và cấu hình video.
${imageContextInstruction}
Video cuối cùng sẽ dài khoảng ${config.duration} giây.
Danh sách cảnh quay phải mô tả một chuỗi các cảnh quay riêng biệt, chỉ định góc máy và chuyển động.
${dialogueInstruction}

**Hướng dẫn về Nhịp độ và Số lượng Cảnh quay (QUAN TRỌNG):**
Bạn phải điều chỉnh số lượng cảnh quay trong danh sách của mình dựa trên định dạng video để khớp với tổng thời lượng.
**Bạn BẮT BUỘC phải tạo ra CHÍNH XÁC ${numberOfScenes} cảnh quay riêng biệt.** Đây là yêu cầu nghiêm ngặt để khớp với thời lượng video yêu cầu. Mỗi cảnh quay sẽ trở thành một phân cảnh 8 giây.

**CHỈ DẪN QUAN TRỌNG:** Bạn PHẢI đảm bảo danh sách cảnh quay chứa đủ nội dung ĐỘC ĐÁO để lấp đầy toàn bộ ${config.duration} giây. Không được lặp lại cảnh hoặc quay vòng lại cùng một địa điểm. Hành trình phải mở rộng và phát triển dựa trên chủ đề.

Đầu ra chỉ được là văn bản danh sách cảnh quay. Không bao gồm bất kỳ cụm từ giới thiệu, tóm tắt hoặc giải thích nào.
NHỚ RẰNG: Quy tắc quan trọng nhất là tạo ra CHÍNH XÁC ${numberOfScenes} cảnh quay. Không tạo nhiều hơn hoặc ít hơn.`;
    },

    systemInstruction_generateScenes: (config: VideoConfig, isContinuation: boolean) => {
        const sceneDuration = 8;
        const styleLower = config.style.toLowerCase();
        
        const isPov = styleLower.includes('pov');
        const isHyperColor = styleLower.includes('hyper color');
        const isSurvival = styleLower.includes('wilderness survival');
        const isConstruction = styleLower.includes('construction');
        const isWarfare = styleLower.includes('first-person warfare');
        const isBlueprint = styleLower.includes('blueprint assembly');
        
        let pacingInstruction = "";
        switch (config.format) {
            case 'trailer':
                pacingInstruction = `**Nhịp độ NHANH ('trailer').** Bạn phải tạo ra các cảnh có năng lượng cao. Nếu danh sách cảnh quay chứa nhiều hành động ngắn, bạn BẮT BUỘC phải kết hợp một vài hành động trong số đó vào một cảnh ${sceneDuration} giây duy nhất để duy trì nhịp độ nhanh. Một mục trong danh sách cảnh quay có thể chỉ đại diện cho 2-4 giây hành động.`;
                break;
            case 'longform':
                pacingInstruction = `**Nhịp độ CHẬM ('longform').** Bạn phải tạo ra các cảnh quay đầy không khí, kéo dài. Bạn nên mở rộng một điểm hoặc khoảnh khắc duy nhất từ danh sách cảnh quay để lấp đầy toàn bộ cảnh ${sceneDuration} giây. Nhấn mạnh các chuyển động máy quay chậm, có chủ ý và việc hòa mình vào môi trường.`;
                break;
            case 'short':
            default:
                pacingInstruction = `**Nhịp độ TIÊU CHUẨN ('short').** Một cảnh ${sceneDuration} giây duy nhất nên bao quát một cách thoải mái một hoặc hai điểm từ danh sách cảnh quay. Dòng chảy phải cảm thấy tự nhiên và không vội vã, nhưng vẫn hấp dẫn.`;
                break;
        }

        const dialogueInstruction = config.includeDialogue
          ? `- \`dialogue\`: (String) Trích xuất lời thoại hoặc lời dẫn tương ứng cho cảnh này từ danh sách cảnh quay. Ngôn ngữ phải là **${config.dialogueLanguage}**. Tông giọng phải nhất quán với **'${config.dialogueTone}'** và phù hợp với người nói có giới tính **'${config.dialogueGender}'**. Nếu không có lời thoại cho cảnh này trong danh sách cảnh quay, hãy sử dụng một chuỗi rỗng "".`
          : `- \`dialogue\`: (String) BẮT BUỘC là một chuỗi rỗng "". Không có lời thoại.`;

        let extraEnvInstruction = "";
        if (isHyperColor) {
            extraEnvInstruction = " IMPORTANT: The visual style is HYPER COLOR FANTASY. The sky MUST be vivid, lively, and dynamic. Use 'wholesome' tones and saturated colors. The landscape must be ENDLESS and constantly changing. Never show the exact same view twice." 
        } else if (isSurvival) {
            extraEnvInstruction = " IMPORTANT: The visual style is WILDERNESS SURVIVAL. The environment must feel raw, untamed, and remote. Emphasize natural textures like rock, dirt, dense foliage, and rough bark. Avoid any signs of modern civilization."
        } else if (isWarfare) {
            extraEnvInstruction = " IMPORTANT: The visual style is FIRST-PERSON WARFARE. The environment is a chaotic, active battlefield. Include elements like smoke, distant explosions, debris, trenches, and ruined structures. The atmosphere is tense and action-packed."
        } else if (isBlueprint) {
             extraEnvInstruction = " IMPORTANT: The visual style is BLUEPRINT ASSEMBLY. The environment must be a clean, futuristic, or technical setting, like a laboratory, workshop, or a neutral studio background with grid lines. The blueprint can persist as a faint holographic overlay during assembly to guide the parts."
        }
        
        let extraMotionInstruction = "";
        if (isWarfare) {
            extraMotionInstruction = " CRITICAL: The motion must represent the soldier's direct actions from a first-person view. Describe head movements (looking left/right), body movements (running, crouching), and interactions (aiming a weapon). The action MUST be continuous and seamless from one scene to the next. Example: '(0-2s): Head snaps right towards an explosion at (X:90, Y:50). (2-8s): Runs forward, camera shaking violently, towards cover at (X:50, Z:midground).'"
        } else if (isPov) {
             extraMotionInstruction = " Ensure the camera movement strictly mimics a First-Person View (POV) of a traveler moving through the space (mostly Z-axis movement, e.g., walking forward). The movement must feel continuous and forward-momentum based."
        } else if (isConstruction || isBlueprint) {
             extraMotionInstruction = " CRITICAL: The camera MUST be completely static. All motion should come from elements appearing or changing within the frame. Describe this as 'No camera motion'."
        }

        let extraCameraInstruction = "";
        if (isSurvival) {
            extraCameraInstruction = "Incorporate handheld, slightly shaky camera work to create a sense of realism and urgency."
        } else if (isConstruction) {
            extraCameraInstruction = "CRITICAL: This is a CONSTRUCTION TIMELAPSE. The 'camera' prompt MUST be IDENTICAL for every single scene. Use a static, locked-off shot like 'Static wide shot, eye-level, locked-off camera' and DO NOT change it between scenes.";
        } else if (isWarfare) {
            extraCameraInstruction = "CRITICAL: This is a FIRST-PERSON WARFARE sequence. The 'camera' prompt MUST be IDENTICAL for every single scene to maintain the 'one-shot' FPV feel. Use a consistent description like 'First-person perspective (FPV) from a soldier's helmet cam, shaky, body-cam footage, realistic motion blur' and DO NOT change it between scenes.";
        } else if (isBlueprint) {
            extraCameraInstruction = "CRITICAL: This is a BLUEPRINT ASSEMBLY sequence. The 'camera' prompt MUST be IDENTICAL for every single scene. Use a static, locked-off shot like 'Static medium shot, eye-level, locked-off on a central assembly point' and DO NOT change it between scenes.";
        }
        
        let extraNegativePrompts = "";
        if (isSurvival) {
            extraNegativePrompts = `In addition to the standard ones, also include "cities", "roads", "vehicles", "plastic", "man-made structures".`;
        } else if (isWarfare) {
            extraNegativePrompts = `In addition to the standard ones, also include "calm", "peaceful", "tourists", "clean environment", "third-person view".`;
        } else if (isBlueprint) {
            extraNegativePrompts = `In addition to the standard ones, also include "people", "organic elements", "clutter", "messy background".`;
        }
        
        let antiRepetition = "CRITICAL: Ensure the narrative EXPANDS. Do not repeat scenes or loop back to previous locations. Each scene must offer a new perspective or a new part of the journey.";
        if (isConstruction) {
            antiRepetition = "CRITICAL: Ensure the construction PROGRESSES. Do not repeat a stage. Each scene must build upon the last, adding new elements or completing parts of the structure until the project is finished.";
        } else if (isWarfare) {
            antiRepetition = "CRITICAL: Ensure the narrative action sequence PROGRESSES. Do not repeat actions or stay in one place. Each scene must advance the short story (e.g., from conflict, to objective, to resolution).";
        } else if (isBlueprint) {
            antiRepetition = `CRITICAL: Ensure the assembly PROGRESSES LOGICALLY FROM THE INSIDE OUT. Do not repeat an assembly stage. Each scene must build upon the last. The 'description' must use the 'Cross-Anchor' technique: it must explicitly state which new part is being added AND how it connects to the components from the previous scene's final state.`;
        }


        return `Bạn là một AI tạo bảng phân cảnh hình ảnh chuyên về quay phim du lịch. Nhiệm vụ của bạn là chia nhỏ một danh sách cảnh quay thành một loạt các phân cảnh 8 giây chi tiết cho một mô hình tạo hình ảnh.
Bạn sẽ nhận được một danh sách cảnh quay và cấu hình video. Bạn phải tạo ra một mảng JSON các đối tượng phân cảnh.

${pacingInstruction}

**YÊU CẦU VỀ NGÔN NGỮ (CỰC KỲ QUAN TRỌNG):**
- TẤT CẢ các giá trị chuỗi trong toàn bộ đầu ra JSON (description, style, camera, lighting, motion, audio, v.v.) BẮT BUỘC phải được viết bằng **tiếng Anh (English)**. Tiếng Anh là ngôn ngữ bắt buộc cho mô hình tạo video.

**Logic Dựng phim & Chuyển cảnh Chuyên nghiệp (CỰC KỲ QUAN TRỌNG):**
Để tạo ra một video chuyên nghiệp và liền mạch, bạn BẮT BUỘC phải tuân thủ các nguyên tắc dựng phim sau đây cho MỌI chuyển cảnh. Khung hình bắt đầu của cảnh hiện tại PHẢI nối tiếp một cách logic và trực quan với khung hình kết thúc của cảnh trước đó.

1.  **Công thức "Neo chéo" (Cross-Anchor) (BẮT BUỘC):** Đây là quy tắc quan trọng nhất.
    - \`description\` của cảnh TRƯỚC đó phải kết thúc bằng một "neo" rõ ràng (một vật thể, ánh mắt của nhân vật, một chuyển động cụ thể).
    - \`description\` của cảnh HIỆN TẠI PHẢI bắt đầu bằng cách tham chiếu đến chính xác "neo" đó, tạo ra một liên kết không thể phá vỡ.
    - Ví dụ:
      - Mô tả cảnh 5 kết thúc: "...nhân vật nhìn lên đỉnh núi xa xăm." (Neo: đỉnh núi)
      - Mô tả cảnh 6 bắt đầu: "Từ đỉnh núi, khung cảnh cho thấy một dòng sông uốn lượn bên dưới."

2.  **"Chuyển tiếp Trạng thái" (Match Cut):** Để có những cú cắt mượt mà, gần như vô hình, bạn nên ưu tiên giữ lại các cài đặt từ cảnh trước.
    - Các giá trị \`camera\` và \`lighting\` của cảnh HIỆN TẠI, theo mặc định, phải GIỐNG HỆT với giá trị của cảnh trước.
    - Chỉ thay đổi chúng nếu kịch bản yêu cầu một sự thay đổi đột ngột. Nếu phải thay đổi, hãy mô tả sự chuyển đổi trong trường \`motion\` hoặc \`description\` (ví dụ: "máy quay từ từ thu nhỏ," "ánh sáng mờ dần").

3.  **"Motif" nhất quán:** Duy trì một yếu tố hình ảnh hoặc khái niệm lặp lại qua một chuỗi các cảnh để gắn kết chúng lại với nhau. Đây có thể là một màu sắc, một vật thể, một loại ánh sáng, hoặc một âm thanh được mô tả trong trường \`audio\`.

4.  **Tính nhất quán của Dòng thời gian:** Không thực hiện các thay đổi đột ngột về thời gian trong ngày (ví dụ: từ ban ngày sang ban đêm) giữa các cảnh liên tiếp trừ khi có một sự chuyển tiếp rõ ràng và hợp lý (như time-lapse) được mô tả rõ trong kịch bản.

**Hệ tọa độ & Chuyển động (CỰC KỲ QUAN TRỌNG):**
Bạn PHẢI mô tả chuyển động của máy quay và các yếu tố bằng một lưới tọa độ.
- **Trục X (0-100):** Đại diện cho vị trí theo chiều ngang, từ trái (0) đến phải (100).
- **Trục Y (0-100):** Đại diện cho vị trí theo chiều dọc, từ dưới (0) lên trên (100).
- **Trục Z (độ sâu):** Sử dụng các chuỗi: 'foreground', 'midground', 'background'.

Mỗi đối tượng phân cảnh phải có cấu trúc sau và tuân thủ các quy tắc nghiêm ngặt này:
- \`scene_id\`: (Integer) Số thứ tự của cảnh, bắt đầu từ 1.
- \`time\`: (String) Dấu thời gian cho cảnh ở định dạng "MM:SS". Mỗi cảnh dài ${sceneDuration} giây.
- \`prompt\`: (Object) Một prompt chi tiết cho mô hình tạo hình ảnh, chứa các trường sau:
- \`description\`: (String) Một câu mô tả sống động về cảnh quay chính bằng **tiếng Anh**. ${antiRepetition}
- \`style\`: (String) Phong cách hình ảnh chính cho cảnh. Hầu như luôn là "${config.style}".
- \`camera\`: (String) Mô tả loại góc quay, góc máy và bất kỳ chuyển động nào bằng **tiếng Anh**. Sử dụng các thuật ngữ như 'wide angle', 'drone shot', 'flycam', 'slow pan left'. ${extraCameraInstruction}
- \`lighting\`: (String) Mô tả phong cách ánh sáng bằng **tiếng Anh** (ví dụ: 'golden hour', 'bright midday sun', 'natural lighting').
- \`environment\`: (String) Chi tiết về bối cảnh và không khí bằng **tiếng Anh**.${extraEnvInstruction}
- \`elements\`: (Array of Strings) Liệt kê các đối tượng chính hoặc các đặc điểm môi trường bằng **tiếng Anh**.
- \`motion\`: (String) **PHẢI DÙNG TỌA ĐỘ (trừ khi tĩnh).** ${extraMotionInstruction} Mô tả từng bước của tất cả các chuyển động máy quay trong cảnh 8 giây, tương đối với hệ tọa độ, bằng **tiếng Anh**. Ví dụ: "(0-8s): Slow flycam shot moving forward from (X:50, Y:80, Z:background) to (X:50, Y:20, Z:midground), revealing the valley below."
${dialogueInstruction}
- \`audio\`: (String) **KHÔNG đề cập đến âm nhạc.** Chỉ mô tả các âm thanh môi trường thực tế, sống động và chân thực của địa điểm bằng **tiếng Anh**. Tập trung vào các âm thanh siêu thực và chi tiết. Ví dụ: "The gentle lapping of water against the shore, a distant seagull's cry, the soft crunch of sand underfoot, a light breeze rustling through palm leaves."
- \`ending\`: (String) Mô tả khung hình cuối cùng hoặc chuyển cảnh của cảnh quay bằng **tiếng Anh**.
- \`text\`: (String) Thường là "none".
- \`keywords\`: (Array of Strings) Liệt kê 5-10 từ khóa liên quan bằng **tiếng Anh** (ví dụ: 'travel', 'landscape', 'drone', 'cinematic', 'nature').
- \`aspect_ratio\`: (String) Phải là "16:9".
- \`duration_seconds\`: (Integer) Phải là ${sceneDuration}.
- \`fps\`: (Integer) Phải là 24.
- \`quality\`: (String) Phải là "high".
- \`negative_prompts\`: (Array of Strings) Liệt kê những thứ cần tránh bằng **tiếng Anh**, như "people", "buildings", "text", "logos". ${extraNegativePrompts}

**QUAN TRỌНG:** Đảm bảo đầu ra cuối cùng là một đối tượng JSON duy nhất, được định dạng hoàn hảo, bắt đầu bằng \`{\` và kết thúc bằng \`}\`, chứa mảng 'scenes'. Không thêm bất kỳ văn bản hoặc markdown nào trước hoặc sau JSON.`;
    },
    
    systemInstruction_generateCharacters: (duration: number) => ``,
    systemInstruction_generateCharacterFromImage: () => ``,
};

export const translations = {
  en,
  vi,
};

export type TranslationKeys = typeof en;