
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('choices show up when draw is selected', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('player-duo should be displayed ', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    const botBtns = await driver.findElements(By.className('bot-btn'))
    await botBtns[0].click()
    const playerId = await driver.findElement(By.id('player-duo'))
    const displayed = await playerId.isDisplayed()
    expect(displayed).toBe(true)
})