const assert = require('assert');

const {
	openBrowser, goto, write, click, closeBrowser, text
} = require('taiko');

step("Open Browser", async function() {
	await openBrowser({ headless: false });
});

step("Search For <toSearch>", async function(toSearch) {
	await goto("google.com");
	await write(toSearch);
	await click("Google Search");
});

step("Assert text <content> exists on the page.", async function(content) {
	assert.ok(await text(content).exists());
});

step("Close Browser", async function() {
	await closeBrowser();
});
