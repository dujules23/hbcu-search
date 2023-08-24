import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../database/dbConnect";
import School from "../../../database/schoolSchema";

// types for data
type Data = {
  name: string;
  link: string;
  location: string;
  specialization: string;
  description: string;
  image: string;
  errorMessage: string;
};

// get function that grabs school data
const getSchools = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await dbConnect();

  const create = new School({
    name: "Benedict College",
    link: "https://www.benedict.edu/",
    location: "Columbia, South Carolina",
    specialization: "Liberal Arts",
    description:
      "Benedict College is accredited by the Southern Association of Colleges and Schools Commission on Colleges to award baccalaureate and masters degrees. Five of the College’s degree programs hold national accreditation: The School of Education, Social Work, Environmental Health Science, Arts and Sciences and the Tyrone Adam Burroughs School of Business and Entrepreneurship.",
    image:
      "https://lh3.googleusercontent.com/lr/AJUiC1xytVqImeSTz79PySyAZjewDUnccmhVBqkrHgtsxkd3wtxvq0cO9gneBdNQTtm2FfPtx34RLojjLis0JEhpBSv5mLeLJlkdGNo_88vl4As0hUPkryx-cJSU8bviE7QzznpzP1KMkXitSvBxlUqaPBO3tu6hArhE4xGP4iDf_kEHS8hkS0rw5_pBzucPE9EypWCL8cbJz74_c8ZLu3EWqtzbawMK2kOmeKzTZ8RHXKhXk0WPeeMadR5BLKFidUyQM5btA6MUSFTk1hhIL6DckqWPAvvZlrQfmCZ_K-Evxm67x572glRxTfvCayIVsckuPOyQ2I8ySJk8ZWwkbI8vd_fC4U3eH_GhfM33mTo16CukQp35HqzWF5Y1u0OM4ZKl8SsQ6jPDMAfPugY-KM-WRQHrCPu73a7LaF--xWPCmoZO3DgFt1oxerDDkz9VavURBHapY8UpXcyZM--H6JOhHw2VuvC25TlisfO-1y6C4RyM9o0wATQRGnL1eZUHOMQCXxQaEwq2_LdUAkCZXElBjV98w_4oPpq-9XuGxNyNLYlhaFIkXI7SovDs3Sv9A0ST7jq93UgsQAyhoTAvJYnMR95kmM8a7kz70_dltOPYFOQNcMhkCKauyGIxYiPwm2bmbzNvzGVbDcP6uWtkF-xH9lkU4lx1IxzYS5Ow9Q81b_Sjr-3Zk6i-3KoqLz0SJIO0hZrrMG_R3egWxetgQV4w80m8w2MXuOvJ_3034d4SahUUB5ryOR_GF_-eNiO_5s-w66RtXIxsBCyaPr6yMBkB-PqI7hhm1xkxvxnaz6I1aKGgJrohqikoHYewXRCMGYz1d60oGqk_Wodp2Ti896YuxGG6_icdjDEAJ0vg7oCdWIjY2NrJ8wTGmdnnoNcLe-i_9LgFeRs8-RDuNIfu8Pmv2zrhPaI1DhmGgHR1esrPk3aQKt0tbkRb7i6zOng-gV6ecocRyu_sOB7ATM6MteVmDcDgcuVArKZ-UOxzrQvlBuy6yhrb=w1600-h1600",
  });

  create.save().then(() => res.status(200).json(create));
};

export default getSchools;
