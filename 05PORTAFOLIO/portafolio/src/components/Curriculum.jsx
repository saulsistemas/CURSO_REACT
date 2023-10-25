import { Experiencia } from "../components/cv/Experiencia";
import { Educacion } from "../components/cv/Educacion";
import { Habilidades } from "../components/cv/Habilidades";

export const Curriculum = () => {
  return (
    <div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">

          <Experiencia/>
          <Educacion/>
          <div className="pb-5"></div>
          <Habilidades/>
        </div>
      </div>
    </div>
  )
}
