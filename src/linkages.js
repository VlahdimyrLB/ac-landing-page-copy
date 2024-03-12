function Linkages() {
  return (
    // <div className="">
    <div className="relative container flex items-start justify-start text-[#136A39]  md:w-1/4 md:p-4 mx-auto">
      <div class="sticky top-20 grid grid-cols-1 md:grid-rows-5 gap-0 w-full space-y-0">
        <div className="">
          <h1 className="p-5 mt-8 text-bold text-2xl">Linkages</h1>
        </div>
        {/* PRC */}
        <div class="grid grid-cols-3 gap-0 bg-white p-4">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Philippine_Red_Cross_Emblem.svg/1200px-Philippine_Red_Cross_Emblem.svg.png"
              alt=""
              class="h-14 w-auto items-center justify-center ml-2"
            />
          </div>
          <div class="col-span-2 flex flex-col justify-center items-center">
            <div>
              <p class="text-sm">PHILIPPINE RED CROSS</p>
            </div>
          </div>
          <hr className="mt-5 w-96" />
        </div>

        {/* MIKROTIK */}
        <div class="grid grid-cols-3 gap-0 bg-white p-4">
          <div>
            <img
              src="https://sas.telkomuniversity.ac.id/wp-content/uploads/2020/06/mikrotik-1.png"
              alt=""
              class="h-10 w-auto"
            />
          </div>
          <div class="col-span-2 flex flex-col justify-center items-center">
            <div>
              <p class="text-sm">MIKROTIK ACADEMY</p>
            </div>
          </div>
          <hr className="mt-5 w-96" />
        </div>
        {/* GOOGLE WORKSPACE */}
        <div class="grid grid-cols-3 gap-0 bg-white p-4">
          <div>
            <img
              src="https://www.technewsworld.com/wp-content/uploads/sites/3/2021/12/xl-2020-google-workspace-1.jpg"
              alt=""
              class="h-14 w-auto"
            />
          </div>
          <div class="col-span-2 flex flex-col justify-center items-center">
            <div>
              <p class="text-sm">GOOGLE WORKSPACE</p>
            </div>
          </div>
          <hr className="mt-5 w-96" />
        </div>

        {/* ACCERT */}
        <div class="grid grid-cols-3 gap-0 bg-white p-4">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWOzzncaibpm8FmaGS02OuPeatpSFheDGB4SU3SilmUCGiEc-7RzAT-FlPRystt8XWZY&usqp=CAU"
              alt=""
              class="h-14 w-auto ml-2"
            />
          </div>
          <div class="col-span-2 flex flex-col justify-center items-center">
            <div>
              <p class="text-sm text-center">
                ANTI-CRIME & COMMUNITY EMERGENCY RESPONSE TEAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Linkages;
