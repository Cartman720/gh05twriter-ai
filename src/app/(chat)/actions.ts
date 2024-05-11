interface Action {
  label: string;
  value: string;
  options?: string[];
}

export const actions: Action[] = [
  {
    label: "Grammar",
    value: "check_grammar",
  },
  {
    label: "Spelling",
    value: "check_spelling",
  },
  {
    label: "Shorten Text",
    value: "shorten_text",
  },
  {
    label: "Expand Text",
    value: "expand_text",
  },
  {
    label: "Change Tone:",
    value: "change_tone",
    options: [
      "Confident",
      "Business",
      "Professional",
      "Friendly",
      "Witty",
      "Happy",
    ],
  },
  {
    label: "Say this differently",
    value: "rephrase",
  },
  {
    label: "Summarise",
    value: "summarize_text",
  },
  {
    label: "Make this better for social",
    value: "optimize_for_social",
  },
  {
    label: "Suggest a prompt",
    value: "suggest_prompt",
  },
];
