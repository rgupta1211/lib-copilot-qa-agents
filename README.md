# QA Agents for Playwright

AI-powered QA automation agents for Playwright test verification, healing, coverage discovery, and generation.

**Key Feature**: Attach this repo once to your Copilot Space, then use it with ANY Playwright project.

---

## Quick Start with Copilot Spaces

### Step 1: Attach This Repo to Your Space

1. Go to your Copilot Space
2. Click **"Add repository"**
3. Attach **lib-copilot-qa-agents** (this repo)

That's it! This repo is now available as a reusable library for any Playwright project.

### Step 2: Open Any Playwright Project

Open your Playwright project in Copilot (VS Code, GitHub.dev, etc.)

### Step 3: Run Workflows via Copilot Chat

In Copilot Chat, say:

```
Run QA workflow
```

The agent will:
1. Read instructions from the attached `lib-copilot-qa-agents` repo
2. Ask you to choose a workflow
3. Execute everything automatically in your current Playwright project

---

## How It Works

**You don't run any commands** - the agent handles everything:

1. **Choose a workflow** - Agent presents options via interactive prompt
2. **Agent executes automatically** - Runs tests, fixes issues, generates code
3. **Review results** - Agent reports what it did

### Example Session

```
You: @workspace Run QA workflow

Copilot: Which workflow would you like to run?
         ○ Verify - Run all tests
         ○ Heal - Fix failing tests
         ○ Discover - Find missing coverage
         ○ Generate - Create new tests
         ○ Full workflow - Run all steps

You: Heal

Copilot: [Automatically runs tests, analyzes failures, fixes locators, re-runs tests]
         ✓ Fixed 3 failing tests
         ✓ All tests now passing
```

## Workflows

| Workflow | Description |
|----------|-------------|
| Verify tests | Run existing tests and report status |
| Heal tests | Automatically fix failing tests |
| Discover coverage | Find untested routes and UI elements |
| Generate tests | Create tests for missing coverage |
| Validate tests | Run generated tests |
| Full workflow | Execute all steps in sequence |

## This Repo Structure

```
lib-copilot-qa-agents/          ← Attach this repo to Copilot Space
├── workflow-agent.md           # Main orchestrator (entry point)
├── discovery/
│   └── discover.md             # Coverage discovery instructions
├── generation/
│   └── generate-tests.md       # Test generation instructions
└── healing/
    ├── healer.md               # Test healing instructions
    └── capture-dom.js          # DOM capture utility
```

## Requirements

Your Playwright project needs:
- Node.js v16+
- Playwright v1.40+

## File Permissions

**This repo (lib-copilot-qa-agents):**
- READ ONLY - agent never modifies anything here

**Your Playwright project (active workspace):**

| Can Modify | Cannot Modify |
|------------|---------------|
| `tests/**` | `playwright.config.ts` |
| `tests/generated/**` | `package.json` |
| `screenshots/**` | Source code |
