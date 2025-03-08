addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  let profileUrl = 'https://github.com/otterai'; // Apna GitHub Profile Link daalo
  let views = 10000; // Har run me kitne views bhejne hain

  for (let i = 0; i < views; i++) {
    fetch(profileUrl);
  }

  return new Response('✔ 10K Views Sent!', { status: 200 });
}
