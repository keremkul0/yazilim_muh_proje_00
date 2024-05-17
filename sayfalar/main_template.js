const main_templateDom = document.getElementById("main_template");
addMainTemplateToDom();

function addMainTemplateToDom(){
    let template = "";
    template = `

    <div class=" d-md-block sidebar border-menu">
        <div class="position-sticky sidebar-sticky">
            <nav class="LOGO-nav">
                <a href=""><img src="../../resimler/toothLogo-removebg-preview.png" class="LOGO"></a>
                <a class="navbar-brand LOGO-Title" href="#">I-DENTIST</a>
            </nav>
            <!-- <h4 class="px-3 pt-3" align=center>Menü</h4> -->
            <hr>
            <br>
            <ul class="nav flex-column px-3 ">
                <li class="nav-item mb-2" align="center">
                    <a class="nav-link menu-link " href="/sayfalar/hasta_listesi/Hasta_Listesi.html">Hasta
                        Listesi</a>
                </li>
                <li class="nav-item mb-2" align="center">
                    <a class="nav-link menu-link" href="/sayfalar/Randevu_Kayit/Randevu_listesi.html">Randevular</a>
                </li>
                <li class="nav-item mb-2" align="center">
                    <a class="nav-link menu-link"
                        href="/sayfalar/Gecmis_Randevular/Gecmis-Randevular.html">Geçmiş</a>
                </li>
            </ul>
        </div>
    </div>  


    `

    main_templateDom.innerHTML = template;
    main_templateDom.classList.add("col-lg-2");
}
