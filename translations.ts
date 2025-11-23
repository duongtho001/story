





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

    // Header.tsx
    appTitle: "Travel Video Storyboarder",
    appDescription: "AI-Powered Travel Video Planner",
    newProjectButton: "New Project",
    guideButtonTooltip: "Show User Guide",
    apiKeyButtonTooltip: "Manage API Keys",
    languageLabel: "Language",

    // InputPanel.tsx
    referenceLocationsLabel: "Reference Locations",
    addReferenceImageButton: "+ Add Reference Image",
    newReferenceImageName: "New Location",
    removeReferenceImageButton: "Remove this image",
    storyIdeaLabel: "Travel Idea / Itinerary",
    suggestIdeaButton: "Suggest an Idea",
    suggestingIdeaButton: "Suggesting...",
    storyIdeaPlaceholder: "Describe your travel video idea. For example: A cinematic journey through the mountains of Ha Giang, Vietnam, focusing on winding roads, local markets, and epic landscapes. OR for Timelapse: Build a wooden stilt house on an empty plot of land, adding a garden and pond. OR for Blueprint: Assemble a futuristic motorcycle from a holographic blueprint, showing each part connecting automatically.",
    generatedScriptLabel: "Generated Shot List",
    videoSettingsLabel: "Video Settings",
    durationLabel: "Approximate Video Duration (minutes)",
    durationPlaceholder: "e.g., 2",
    durationFeedback: (scenes: number, mins: number, secs: number) => `~${scenes} scenes (~${mins}m ${secs}s).`,
    videoFormatLabel: "Video Pace / Format",
    styleLabel: "Visual Style",
    generateScriptButton: "Generate Shot List",
    generatingScriptButton: "Generating Shot List...",
    generateStoryboardButton: "Generate Storyboard",
    generatingStoryboardButton: "Generating Storyboard...",
    
    // Obsolete character keys replaced or removed.
    autoGenerateButton: "",
    analyzingScript: "",
    characterNamePlaceholder: "",
    removeCharacterButton: "",
    charCoreIdentityLabel: "",
    charCoreIdentityPlaceholder: "",
    charPhysicalDescriptionLabel: "",
    charPhysicalDescriptionPlaceholder: "",
    charFacialFeaturesLabel: "",
    charFacialFeaturesPlaceholder: "",
    charHairLabel: "",
    charHairPlaceholder: "",
    charFashionStyleLabel: "",
    charFashionStylePlaceholder: "",
    charPersonalitySummaryLabel: "",
    charPersonalitySummaryPlaceholder: "",
    charKeyExpressionsGesturesLabel: "",
    charKeyExpressionsGesturesPlaceholder: "",
    charVoiceDescriptionLabel: "",
    charVoiceDescriptionPlaceholder: "",
    characterImageLabel: "",
    noImageGenerated: "No image generated.",
    generateImageButton: "Generate Image",
    generatingImageButton: "Generating...",
    uploadImageButton: "",
    analyzeImageButton: "",
    analyzingImageButton: "",
    orLabel: "",
    addCharacterButton: "",
    dialogueSettingsLabel: "",
    dialogueOffLabel: "",
    dialogueOnLabel: "",
    dialogueLanguageLabel: "",
    combinedCharacterDNAlabel: "",
    copyButton: "",
    copiedButton: "",
    combinedCharacterDNAPlaceholder: "",

    // SceneTimeline.tsx
    timelineTitle: "Storyboard Timeline",
    downloadButton: "Download Prompts",
    primaryReferenceLabel: "Reference Image for Batch Generation",
    selectPrimaryReferencePrompt: "Select a reference image",
    generateAllImagesButton: "Generate All Missing Images",
    generatingAllImagesButton: "Generating All...",
    downloadAllImagesButton: "Download All Images (.zip)",
    emptyTimelineTitle: "Your storyboard is empty.",
    emptyTimelineDescription: "Provide a travel idea and generate a shot list to see your scenes here.",

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
        { title: "Step 3: Add Reference Images", description: "Upload one or more high-quality photos of the location or the style you want to emulate. These will guide the AI's image generation." },
        { title: "Step 4: Generate Shot List", description: "Click 'Generate Shot List'. The AI will create a sequence of shots (like a script) based on your travel idea and duration." },
        { title: "Step 5: Generate Storyboard", description: "With the shot list in place, click 'Generate Storyboard' to create a detailed, scene-by-scene breakdown with AI image prompts." },
        { title: "Step 6: Generate Scene Images", description: "In the timeline, select a reference image and generate visuals for each scene, either one by one or all at once using the batch tool." },
        { title: "Step 7: Review and Export", description: "Review your storyboard. You can edit the JSON prompts for any scene to fine-tune the visuals, then download all prompts or images." },
    ],
    guideProTipsTitle: "Pro-Tips",
    guideProTips: [
        { title: "Quality References", description: "The better your reference images, the more consistent and beautiful your generated scenes will be. Use clear, well-lit photos." },
        { title: "Iterate and Refine", description: "Don't be afraid to edit the shot list or prompts. The JSON prompts are fully editable to change camera angles, lighting, or motion." },
        { title: "Batch Generation", description: "To quickly visualize your entire storyboard, upload a primary reference image and use the 'Generate All Missing Images' button." },
        { title: "Style Matters", description: "The initial style you choose influences everything from the shot list to the scene descriptions. Experiment to get unique results." },
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

    // Gemini Service System Instructions
    systemInstruction_generateStoryIdea: (style: string) => `You are a creative travel planner and videographer. Your task is to generate a short, compelling itinerary or concept for a travel video.
The idea should be concise (3-5 sentences) and suitable for the visual style of "${style}".
Focus on destinations, key activities, and visual highlights that would look amazing on camera.
The response must be only the story idea text, with no extra formatting or introductory phrases.`,

    systemInstruction_generateScript: (config: VideoConfig) => {
        let styleSpecificInstruction = "";
        const styleLower = config.style.toLowerCase();
        if (styleLower.includes('construction')) {
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
The user has chosen a 'Blueprint Assembly' style. The ENTIRE shot list must describe the progressive assembly of a mechanical or industrial product from a SINGLE, UNCHANGING camera perspective.
- **Shot 1:** A technical blueprint or schematic is displayed on a surface or as a hologram.
- **Subsequent Shots:** Each shot describes a new stage of assembly. Components materialize and fly into place, building upon the previous stage (e.g., chassis, engine parts, circuits, outer casing).
- **Final Shots:** Describe the fully assembled product, possibly with lights turning on, parts moving, or a final polished presentation.
- **DO NOT** describe different camera angles or movements. Every shot is from the same static viewpoint. The script must be a list of assembly phases.
`;
        }


        return `You are a professional travel videographer. Your task is to write a descriptive shot list based on a travel idea and video configuration.
The final video will be approximately ${config.duration} seconds long.
The shot list should describe a sequence of distinct shots, specifying camera angles (e.g., wide, drone, close-up) and camera movement (e.g., slow pan, fly-over, tracking shot).
The pacing should match the specified video format: '${config.format}'.
- 'trailer': Fast-paced, quick cuts, high-impact moments. Focus on building excitement.
- 'short': Standard pacing, allows for more scenic and detailed shots.
- 'longform': Slower pace, more focus on atmosphere, emotion, and lingering on beautiful views.

${styleSpecificInstruction}

**CRITICAL INSTRUCTION:** You MUST ensure the shot list contains enough UNIQUE content to fill the entire ${config.duration} seconds. Do not loop or repeat the same shot or location. The journey must expand and progress based on the theme.

The script should be purely visual, with no dialogue or voiceover. Describe what is seen and how it is filmed.
The output must be ONLY the shot list text. Do not include any introductory phrases, summaries, or explanations.`;
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

        let extraEnvInstruction = "";
        if (isHyperColor) {
            extraEnvInstruction = " IMPORTANT: The visual style is HYPER COLOR FANTASY. The sky MUST be vivid, lively, and dynamic. Use 'wholesome' tones and saturated colors. The landscape must be ENDLESS and constantly changing. Never show the exact same view twice." 
        } else if (isSurvival) {
            extraEnvInstruction = " IMPORTANT: The visual style is WILDERNESS SURVIVAL. The environment must feel raw, untamed, and remote. Emphasize natural textures like rock, dirt, dense foliage, and rough bark. Avoid any signs of modern civilization."
        } else if (isWarfare) {
            extraEnvInstruction = " IMPORTANT: The visual style is FIRST-PERSON WARFARE. The environment is a chaotic, active battlefield. Include elements like smoke, distant explosions, debris, trenches, and ruined structures. The atmosphere is tense and action-packed."
        } else if (isBlueprint) {
             extraEnvInstruction = " IMPORTANT: The visual style is BLUEPRINT ASSEMBLY. The environment must be a clean, futuristic, or technical setting, like a laboratory, workshop, or a neutral studio background with grid lines. The blueprint should be visible at the start and can fade or persist as a holographic overlay during assembly."
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
            antiRepetition = "CRITICAL: Ensure the assembly PROGRESSES. Do not repeat an assembly stage. Each scene must build upon the last, adding new components until the product is fully assembled and operational.";
        }


        return `You are a Visual Storyboard AI specializing in travel cinematography. Your task is to break down a shot list into a series of detailed 8-second scenes for an image generation model.
You will receive a shot list and video configuration. You must generate a JSON array of scene objects.

**LANGUAGE REQUIREMENTS (ABSOLUTELY CRITICAL):**
- ALL string values in the entire JSON output (description, style, camera, lighting, motion, audio, etc.) MUST be written in **English**. English is the required language for the video generation model.

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
- \`dialogue\`: (String) MUST be an empty string "". No dialogue.
- \`audio\`: (String) **DO NOT mention music.** Describe only the realistic, vivid, and immersive ambient sounds of the location in **English**. Focus on hyper-realistic and detailed sounds. Example: "The gentle lapping of water against the shore, a distant seagull's cry, the soft crunch of sand underfoot, a light breeze rustling through palm leaves."
- \`ending\`: (String) Describe the final frame or transition of the scene in **English**.
- \`text\`: (String) Usually "none".
- \`keywords\`: (Array of Strings) List 5-10 relevant keywords in **English** (e.g., 'travel', 'landscape', 'drone', 'cinematic', 'nature').
- \`aspect_ratio\`: (String) Must be "16:9".
- \`duration_seconds\`: (Integer) Must be ${sceneDuration}.
- \`fps\`: (Integer) Must be 24.
- \`quality\`: (String) Must be "high".
- \`negative_prompts\`: (Array of Strings) List things to avoid in **English**, like "people", "buildings", "text", "logos". ${extraNegativePrompts}

**Unbroken Action Continuity (EXTREMELY IMPORTANT):** The starting frame of this scene SHOULD logically follow the ending frame of the previous scene to create a smooth video flow. For a timelapse, this means the construction state should progress logically.

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

    // Header.tsx
    appTitle: "Storyboard Video Du lịch",
    appDescription: "Lên kế hoạch video du lịch bằng AI",
    newProjectButton: "Dự án mới",
    guideButtonTooltip: "Hiển thị hướng dẫn sử dụng",
    apiKeyButtonTooltip: "Quản lý API Key",
    languageLabel: "Ngôn ngữ",

    // InputPanel.tsx
    referenceLocationsLabel: "Địa điểm tham chiếu",
    addReferenceImageButton: "+ Thêm ảnh tham chiếu",
    newReferenceImageName: "Địa điểm mới",
    removeReferenceImageButton: "Xóa ảnh này",
    storyIdeaLabel: "Ý tưởng du lịch / Lịch trình",
    suggestIdeaButton: "Gợi ý ý tưởng",
    suggestingIdeaButton: "Đang gợi ý...",
    storyIdeaPlaceholder: "Mô tả ý tưởng video du lịch của bạn. VD: Một hành trình điện ảnh qua núi Hà Giang, tập trung vào đường đèo, chợ địa phương. HOẶC cho Timelapse: Xây một nhà sàn gỗ trên đất trống, thêm vườn rau và hồ cá. HOẶC cho Bản vẽ: Lắp ráp một chiếc xe máy tương lai từ bản vẽ hologram, hiển thị từng bộ phận tự động kết nối.",
    generatedScriptLabel: "Danh sách cảnh quay đã tạo",
    videoSettingsLabel: "Cài đặt video",
    durationLabel: "Thời lượng video ước tính (phút)",
    durationPlaceholder: "VD: 2",
    durationFeedback: (scenes: number, mins: number, secs: number) => `~${scenes} phân cảnh (~${mins} phút ${secs} giây).`,
    videoFormatLabel: "Nhịp độ / Định dạng video",
    styleLabel: "Phong cách hình ảnh",
    generateScriptButton: "Tạo danh sách cảnh quay",
    generatingScriptButton: "Đang tạo danh sách...",
    generateStoryboardButton: "Tạo bảng phân cảnh",
    generatingStoryboardButton: "Đang tạo bảng phân cảnh...",
    
    // Obsolete character keys
    autoGenerateButton: "",
    analyzingScript: "",
    characterNamePlaceholder: "",
    removeCharacterButton: "",
    charCoreIdentityLabel: "",
    charCoreIdentityPlaceholder: "",
    charPhysicalDescriptionLabel: "",
    charPhysicalDescriptionPlaceholder: "",
    charFacialFeaturesLabel: "",
    charFacialFeaturesPlaceholder: "",
    charHairLabel: "",
    charHairPlaceholder: "",
    charFashionStyleLabel: "",
    charFashionStylePlaceholder: "",
    charPersonalitySummaryLabel: "",
    charPersonalitySummaryPlaceholder: "",
    charKeyExpressionsGesturesLabel: "",
    charKeyExpressionsGesturesPlaceholder: "",
    charVoiceDescriptionLabel: "",
    charVoiceDescriptionPlaceholder: "",
    characterImageLabel: "",
    noImageGenerated: "Chưa có ảnh nào được tạo.",
    generateImageButton: "Tạo ảnh",
    generatingImageButton: "Đang tạo...",
    uploadImageButton: "",
    analyzeImageButton: "",
    analyzingImageButton: "",
    orLabel: "",
    addCharacterButton: "",
    dialogueSettingsLabel: "",
    dialogueOffLabel: "",
    dialogueOnLabel: "",
    dialogueLanguageLabel: "",
    combinedCharacterDNAlabel: "",
    copyButton: "",
    copiedButton: "",
    combinedCharacterDNAPlaceholder: "",

    // SceneTimeline.tsx
    timelineTitle: "Dòng thời gian phân cảnh",
    downloadButton: "Tải xuống prompt",
    primaryReferenceLabel: "Ảnh tham chiếu để tạo hàng loạt",
    selectPrimaryReferencePrompt: "Chọn một ảnh tham chiếu",
    generateAllImagesButton: "Tạo tất cả hình ảnh còn thiếu",
    generatingAllImagesButton: "Đang tạo tất cả...",
    downloadAllImagesButton: "Tải tất cả hình ảnh (.zip)",
    emptyTimelineTitle: "Bảng phân cảnh của bạn trống.",
    emptyTimelineDescription: "Cung cấp ý tưởng du lịch và tạo danh sách cảnh quay để xem các cảnh của bạn ở đây.",

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
        { title: "Bước 3: Thêm Ảnh tham chiếu", description: "Tải lên một hoặc nhiều ảnh chất lượng cao về địa điểm hoặc phong cách bạn muốn. Điều này sẽ hướng dẫn AI tạo hình ảnh." },
        { title: "Bước 4: Tạo Danh sách cảnh quay", description: "Nhấp vào 'Tạo danh sách cảnh quay'. AI sẽ tạo một chuỗi các cảnh quay dựa trên ý tưởng và thời lượng của bạn." },
        { title: "Bước 5: Tạo Bảng phân cảnh", description: "Khi đã có danh sách cảnh quay, hãy nhấp vào 'Tạo Bảng phân cảnh' để tạo ra các prompt chi tiết cho từng cảnh." },
        { title: "Bước 6: Tạo Hình ảnh Phân cảnh", description: "Trong dòng thời gian, chọn một ảnh tham chiếu và tạo hình ảnh cho từng cảnh, có thể tạo từng cái một hoặc hàng loạt." },
        { title: "Bước 7: Xem lại và Xuất", description: "Xem lại bảng phân cảnh của bạn. Bạn có thể chỉnh sửa prompt JSON để tinh chỉnh hình ảnh, sau đó tải xuống tất cả prompt hoặc hình ảnh." },
    ],
    guideProTipsTitle: "Mẹo chuyên nghiệp",
    guideProTips: [
        { title: "Tham chiếu chất lượng", description: "Ảnh tham chiếu của bạn càng tốt, các cảnh được tạo ra sẽ càng nhất quán và đẹp mắt. Hãy sử dụng ảnh rõ nét, đủ sáng." },
        { title: "Lặp lại và Tinh chỉnh", description: "Đừng ngại chỉnh sửa danh sách cảnh quay hoặc prompt. Prompt JSON hoàn toàn có thể chỉnh sửa để thay đổi góc máy, ánh sáng hoặc chuyển động." },
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

    // Gemini Service System Instructions (VI)
    systemInstruction_generateStoryIdea: (style: string) => `Bạn là một người lập kế hoạch du lịch và nhà quay phim sáng tạo. Nhiệm vụ của bạn là tạo ra một lịch trình hoặc ý tưởng ngắn gọn, hấp dẫn cho một video du lịch.
Ý tưởng nên súc tích (3-5 câu) và phù hợp với phong cách hình ảnh của "${style}".
Tập trung vào các điểm đến, hoạt động chính và các điểm nhấn hình ảnh sẽ trông tuyệt vời trên máy quay.
Phản hồi chỉ được là văn bản ý tưởng, không có định dạng thừa hoặc các cụm từ giới thiệu.`,

    systemInstruction_generateScript: (config: VideoConfig) => {
        let styleSpecificInstruction = "";
        const styleLower = config.style.toLowerCase();
        if (styleLower.includes('construction')) {
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
**HƯỚDẪN THEO PHONG CÁCH (SẢN XUẤT THEO BẢN VẼ):**
Người dùng đã chọn phong cách 'Sản xuất theo Bản vẽ'. TOÀN BỘ danh sách cảnh quay phải mô tả quá trình lắp ráp lũy tiến của một sản phẩm cơ khí hoặc công nghiệp từ một góc máy DUY NHẤT, KHÔNG THAY ĐỔI.
- **Cảnh 1:** Một bản vẽ kỹ thuật hoặc sơ đồ được hiển thị trên một bề mặt hoặc dưới dạng hình ảnh 3D (hologram).
- **Các cảnh tiếp theo:** Mỗi cảnh mô tả một giai đoạn lắp ráp mới. Các bộ phận hiện ra và bay vào vị trí, xây dựng dựa trên giai đoạn trước (ví dụ: khung gầm, bộ phận động cơ, mạch điện, vỏ ngoài).
- **Các cảnh cuối:** Mô tả sản phẩm đã lắp ráp hoàn chỉnh, có thể có đèn bật sáng, các bộ phận chuyển động, hoặc một bài trình bày cuối cùng.
- **KHÔNG** mô tả các góc máy hoặc chuyển động máy quay khác nhau. Mọi cảnh đều từ cùng một điểm nhìn tĩnh. Kịch bản phải là một danh sách các giai đoạn lắp ráp.
`;
        }


        return `Bạn là một nhà quay phim du lịch chuyên nghiệp. Nhiệm vụ của bạn là viết một danh sách cảnh quay mô tả dựa trên ý tưởng du lịch và cấu hình video.
Video cuối cùng sẽ dài khoảng ${config.duration} giây.
Danh sách cảnh quay phải mô tả một chuỗi các cảnh quay riêng biệt, chỉ định góc máy (ví dụ: rộng, drone, cận cảnh) và chuyển động của máy quay (ví dụ: lia máy chậm, bay qua, theo dấu).
Nhịp độ phải phù hợp với định dạng video đã chỉ định: '${config.format}'.
- 'trailer': Nhịp độ nhanh, cắt cảnh nhanh, những khoảnh khắc có tác động mạnh. Tập trung vào việc tạo sự hứng thú.
- 'short': Nhịp độ tiêu chuẩn, cho phép có nhiều cảnh đẹp và chi tiết hơn.
- 'longform': Nhịp độ chậm hơn, tập trung nhiều hơn vào không khí, cảm xúc và dừng lại ở những khung cảnh đẹp.

${styleSpecificInstruction}

**CHỈ DẪN QUAN TRỌNG:** Bạn PHẢI đảm bảo danh sách cảnh quay chứa đủ nội dung ĐỘC ĐÁO để lấp đầy toàn bộ ${config.duration} giây. Không được lặp lại cảnh hoặc quay vòng lại cùng một địa điểm. Hành trình phải mở rộng và phát triển dựa trên chủ đề.

Kịch bản phải hoàn toàn bằng hình ảnh, không có đối thoại hoặc lời dẫn. Mô tả những gì được thấy và cách nó được quay.
Đầu ra chỉ được là văn bản danh sách cảnh quay. Không bao gồm bất kỳ cụm từ giới thiệu, tóm tắt hoặc giải thích nào.`;
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

        let extraEnvInstruction = "";
        if (isHyperColor) {
            extraEnvInstruction = " IMPORTANT: The visual style is HYPER COLOR FANTASY. The sky MUST be vivid, lively, and dynamic. Use 'wholesome' tones and saturated colors. The landscape must be ENDLESS and constantly changing. Never show the exact same view twice." 
        } else if (isSurvival) {
            extraEnvInstruction = " IMPORTANT: The visual style is WILDERNESS SURVIVAL. The environment must feel raw, untamed, and remote. Emphasize natural textures like rock, dirt, dense foliage, and rough bark. Avoid any signs of modern civilization."
        } else if (isWarfare) {
            extraEnvInstruction = " IMPORTANT: The visual style is FIRST-PERSON WARFARE. The environment is a chaotic, active battlefield. Include elements like smoke, distant explosions, debris, trenches, and ruined structures. The atmosphere is tense and action-packed."
        } else if (isBlueprint) {
             extraEnvInstruction = " IMPORTANT: The visual style is BLUEPRINT ASSEMBLY. The environment must be a clean, futuristic, or technical setting, like a laboratory, workshop, or a neutral studio background with grid lines. The blueprint should be visible at the start and can fade or persist as a holographic overlay during assembly."
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
            antiRepetition = "CRITICAL: Ensure the assembly PROGRESSES. Do not repeat an assembly stage. Each scene must build upon the last, adding new components until the product is fully assembled and operational.";
        }


        return `Bạn là một AI tạo bảng phân cảnh hình ảnh chuyên về quay phim du lịch. Nhiệm vụ của bạn là chia nhỏ một danh sách cảnh quay thành một loạt các phân cảnh 8 giây chi tiết cho một mô hình tạo hình ảnh.
Bạn sẽ nhận được một danh sách cảnh quay và cấu hình video. Bạn phải tạo ra một mảng JSON các đối tượng phân cảnh.

**YÊU CẦU VỀ NGÔN NGỮ (CỰC KỲ QUAN TRỌNG):**
- TẤT CẢ các giá trị chuỗi trong toàn bộ đầu ra JSON (description, style, camera, lighting, motion, audio, v.v.) BẮT BUỘC phải được viết bằng **tiếng Anh (English)**. Tiếng Anh là ngôn ngữ bắt buộc cho mô hình tạo video.

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
- \`dialogue\`: (String) BẮT BUỘC là một chuỗi rỗng "". Không có lời thoại.
- \`audio\`: (String) **KHÔNG đề cập đến âm nhạc.** Chỉ mô tả các âm thanh môi trường thực tế, sống động và chân thực của địa điểm bằng **tiếng Anh**. Tập trung vào các âm thanh siêu thực và chi tiết. Ví dụ: "The gentle lapping of water against the shore, a distant seagull's cry, the soft crunch of sand underfoot, a light breeze rustling through palm leaves."
- \`ending\`: (String) Mô tả khung hình cuối cùng hoặc chuyển cảnh của cảnh quay bằng **tiếng Anh**.
- \`text\`: (String) Thường là "none".
- \`keywords\`: (Array of Strings) Liệt kê 5-10 từ khóa liên quan bằng **tiếng Anh** (ví dụ: 'travel', 'landscape', 'drone', 'cinematic', 'nature').
- \`aspect_ratio\`: (String) Phải là "16:9".
- \`duration_seconds\`: (Integer) Phải là ${sceneDuration}.
- \`fps\`: (Integer) Phải là 24.
- \`quality\`: (String) Phải là "high".
- \`negative_prompts\`: (Array of Strings) Liệt kê những thứ cần tránh bằng **tiếng Anh**, như "people", "buildings", "text", "logos". ${extraNegativePrompts}

**Tính liên tục của hành động (CỰC KỲ QUAN TRỌNG):** Khung hình bắt đầu của cảnh này NÊN theo sau một cách hợp lý khung hình kết thúc của cảnh trước để tạo ra một luồng video mượt mà. Đối với timelapse, điều này có nghĩa là trạng thái xây dựng phải tiến triển một cách hợp lý.

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