import { Client, handle_file } from "@gradio/client";

console.log("[1] Starting PixAI Tagger test");

try {
  const client = await Client.connect("pixai-labs/pixai-tagger-demo");
  console.log("[2] Connected");

  const result = await client.predict("/tag", {
    image: await handle_file(
      "https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png"
    ),
    include_scores: false,
    keep_underscores: false,
    combined_categories: [
      "general", "character", "style",
      "copyright", "meta", "rating"
    ],
    param_4: 0.17,
    param_5: 0.27,
    param_6: 0.15,
    param_7: 0.24,
    param_8: 0.17,
    param_9: 0.41,
  });

  console.log("[3] API result:");
  console.dir(result, { depth: null });
} catch (error) {
  console.error("[ERROR]", error);
}

