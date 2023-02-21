
// function to generate markdown for README
function generateMarkdown(data) {
  // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
  return `# ${data.title}
  ${generateLicense(data.license)}
----
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test-Instructions
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`

## Questions
${data.questions}
You can find more of my work at [Github Profile](https://github.com/${data.username}).
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.

`;
// License
function generateLicense(license) {

	if (license === "GNU AGPLv3") {
		return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
	} else if (license === "GNU GPLv3") {
		return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
	} else {
		if (license === "GNU LGPLv3") {
			return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
		} else {
			if (license === "Mozilla Public License 2.0") {
				return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
			} else {
				if (license === "Apache License 2.0") {
					return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
				} else {
					if (license === "MIT License") {
						return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
					} else {
						if (license === "Boost Software License 1.0") {
							return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
						} else {
							if (license === "The Unlicense") {
								return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
							}
						}
					}
				}
			}
		}
	}
	return ``
}
}
// function exporting generateMarkdown function
module.exports = generateMarkdown;

