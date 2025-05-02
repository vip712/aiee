export default {
  async fetch(request) {
    return new Response(await fetchAsset(request), {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  },
};

async function fetchAsset(request) {
  const html = await fetch('https://raw.githubusercontent.com/vip712/aiee/main/index.html');
  return html.text();
}
