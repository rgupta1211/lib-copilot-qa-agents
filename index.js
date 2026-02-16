/**
 * QA Agent Library - Main Entry Point
 *
 * This library provides QA automation for Playwright:
 * - Test verification
 * - Test healing (locator repair)
 * - Coverage discovery
 * - Test generation
 * - Test validation
 */

const fs = require('fs');
const path = require('path');

const LIB_VERSION = '1.0.0';
const LIB_NAME = 'qa-agents';

/**
 * Get library information
 */
function getLibInfo() {
  return {
    name: LIB_NAME,
    version: LIB_VERSION,
    description: 'QA automation library for Playwright',
    entryPoints: {
      workflow: './workflow-agent.md',
      discovery: './discovery/discover.md',
      generation: './generation/generate-tests.md',
      healing: './healing/healer.md'
    }
  };
}

/**
 * Get path to agent directory
 */
function getAgentDir() {
  return path.join(__dirname, 'agent');
}

/**
 * Get path to library directory
 */
function getLibDir() {
  return __dirname;
}

/**
 * Ensure agent directory exists
 */
function ensureAgentDir() {
  const agentDir = getAgentDir();
  if (!fs.existsSync(agentDir)) {
    fs.mkdirSync(agentDir, { recursive: true });
  }
  return agentDir;
}

/**
 * Export public API
 */
module.exports = {
  version: LIB_VERSION,
  name: LIB_NAME,
  getLibInfo,
  getAgentDir,
  getLibDir,
  ensureAgentDir,
};

// CLI execution
if (require.main === module) {
  console.log(`${LIB_NAME} v${LIB_VERSION}`);
  console.log(JSON.stringify(getLibInfo(), null, 2));
}