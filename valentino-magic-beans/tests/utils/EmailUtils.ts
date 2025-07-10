import { MailSlurp } from 'mailslurp-client';


export async function createInbox(){
    const mailSlurp = new MailSlurp({ apiKey: process.env.MAIL_SLURP_API_KEY! })
    const inbox = await mailSlurp.inboxController.createInboxWithDefaults();
    return inbox;
}

