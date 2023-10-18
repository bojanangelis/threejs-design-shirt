import CanvasModel from './(canvas)/CanvasComponent'
import CustomizerComponent from './(customizer)/Customizer'
import HomeComponent from './(home)/HomeComponent'

export default function Home() {
  return (
    <main className="app transition-all ease-in">
      <HomeComponent />
      <CustomizerComponent />
      <CanvasModel />
    </main>
  )
}
