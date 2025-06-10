import axios from 'axios';

const FIGMA_WEBHOOK_SECRET = process.env.FIGMA_WEBHOOK_SECRET!;
const FIGMA_PERSONAL_ACCESS_TOKEN = process.env.FIGMA_PERSONAL_ACCESS_TOKEN!;
const ENDPOINT = 'https://dfd04100716e96.lhr.life/api/figma-mcp'; // ngrok等で外部公開したURLに変更

const createWebhook = async () => {
  try {
    const response = await axios.post('https://api.figma.com/v2/webhooks', {
      event_type: 'FILE_UPDATE',
      team_id: '675153021529604871',
      endpoint: ENDPOINT,
      passcode: FIGMA_WEBHOOK_SECRET,
      status: 'ACTIVE'
    }, {
      headers: {
        'X-Figma-Token': FIGMA_PERSONAL_ACCESS_TOKEN
      }
    });
    console.log('Webhook created:', response.data);
  } catch (error: any) {
    console.error('Error creating webhook:', error.response?.data || error.message);
  }
};
createWebhook();
