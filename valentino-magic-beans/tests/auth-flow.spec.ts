import { test } from '@playwright/test';
import { createInbox } from './utils/EmailUtils'

test('Generate inbox', async ()=>{
    const inbox = await createInbox();
    console.log(inbox)
})