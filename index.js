const express = require('express');
const puppeteer = require('puppeteer');

const app=express()
const PORT = process.env.PORT||5000

app.get('/', (req, res) => {
//     const browser = await puppeteer.launch({headless:true})
//     const page = await browser.newPage()

//     try {
//         await page.goto('https://google.com/')
//         await page.waitForSelector('#SIvCob')

//     const text = await page.$eval('#SIvCob', elem => elem.textContent)
//     res.send(text)
//     await browser.close()
//     } catch (error) {
//         console.log(error)
//     }
res.send('teskima tokne")
})



app.listen(PORT, () => {console.log(`app is on port: ${PORT}`)})
