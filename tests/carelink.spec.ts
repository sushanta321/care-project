import {test , expect}from '@playwright/test';

test('register as a provider', async({page})=>{
    await page.goto('https://carelink-fh4o.onrender.com/');
    const register= page.getByRole('link',{name:'Get started'});
    await expect (register).toBeVisible();
    await register.click();

const offercare=page.getByRole('button',{name:'Offer care'});
await expect(offercare).toBeVisible();
await offercare.click();
await page.waitForTimeout(5000)

const fullname= page.locator('.input').first();
//await expect(fullname).toBeVisible();
await expect(fullname).toBeEditable();
await fullname.fill('sushanta jena')

const phone = page.locator('.input').nth(1);
//await expect(phone).toBeVisible();
await expect(phone).toBeEditable();
await phone.fill('7873379291');

const email=page.locator('.input').nth(2);
//await expect(email).toBeVisible();
await expect(email).toBeEditable();
await email.fill('sushanta123@.com');

const password=page.locator('.input').nth(3);
//await expect(password).toBeVisible();
await expect(password).toBeEditable();
await password.fill('Sushanta@123');


const createaccount_button=page.getByRole('button',{name:'Create account'});
//await expect(createaccount_button).toBeVisible();
await createaccount_button.click();
await page.waitForTimeout(5000)
})



test('sign in as a provider',async({page})=>{
    await page.goto('https://carelink-fh4o.onrender.com/');
    const signin= page.getByRole('link',{name:'Sign in'});
    await expect (signin).toBeVisible();
    await signin.click();


    const email = page.locator('input[type="email"]');
    await expect(email).toBeVisible();
    await email.fill('sushanta123@.com');


    const password = page.locator('input[type="password"]');
    await password.fill('Sushanta@123');

    await page.getByRole('button',{name:'Sign in'}).click();

    await page.waitForTimeout(5000)
    
})