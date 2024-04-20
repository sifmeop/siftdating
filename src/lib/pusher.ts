import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

const pusherClient = new PusherClient('db570b51bf52a2e35816', {
  cluster: 'eu',
  authEndpoint: '/api/pusher',
  authTransport: 'ajax',
  auth: {
    headers: {
      'Content-Type': 'application/json'
    }
  }
})

const pusherServer = new PusherServer({
  appId: '1788308',
  key: 'db570b51bf52a2e35816',
  secret: 'fb8d3db284dec555d2b5',
  cluster: 'eu',
  useTLS: true
})

export { pusherClient, pusherServer }
