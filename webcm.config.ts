export default {
  components: [
    {
      name: 'zaraz-assignment',
      settings: { ecommerce: true },
      permissions: ['execute_unsafe_scripts'],
    },
  ],
  target: 'https://example.com/',
  hostname: 'localhost',
  trackPath: '/webcm/track',
  port: 8181,
  cookiesKey: 'something-very-secret',
}
