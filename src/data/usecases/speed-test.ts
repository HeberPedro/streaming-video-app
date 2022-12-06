import SpeedTester from 'browser-speed-test'

export class SpeedTest {
  execute(
    interval: number,
    testUrl: string,
    callback: (speed: number) => void
  ) {
    return setInterval(() => {
      const speedTester = new SpeedTester({ url: testUrl })
      console.log('executou')

      speedTester
        .start()
        .then((result) => {
          callback(result)
        })
        .catch((error) => {
          console.log(error)
        })
    }, interval)
  }
}
