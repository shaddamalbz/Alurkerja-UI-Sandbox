// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

export const Dashboard = () => {
  return (
    <div className="bg-white p-6">
      <CanvasJSChart
        options={{
          theme: 'light2',
          title: {
            text: 'Nifty 50 Index',
          },
          data: [
            {
              type: 'line',
              dataPoints: [
                {
                  x: 1483228800000,
                  y: 8561.3,
                },
                {
                  x: 1485907200000,
                  y: 8879.6,
                },
                {
                  x: 1488326400000,
                  y: 9173.75,
                },
                {
                  x: 1491004800000,
                  y: 9304.05,
                },
                {
                  x: 1493596800000,
                  y: 9621.25,
                },
                {
                  x: 1496275200000,
                  y: 9520.9,
                },
                {
                  x: 1498867200000,
                  y: 10077.1,
                },
                {
                  x: 1501545600000,
                  y: 9917.9,
                },
                {
                  x: 1504224000000,
                  y: 9788.6,
                },
                {
                  x: 1506816000000,
                  y: 10335.3,
                },
                {
                  x: 1509494400000,
                  y: 10226.55,
                },
                {
                  x: 1512086400000,
                  y: 10530.7,
                },
              ],
            },
          ],
        }}
      />
    </div>
  )
}
