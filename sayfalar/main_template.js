const main_templateDom = document.getElementById("main_template");
addMainTemplateToDom();

function addMainTemplateToDom() {
    let template = `
    <div class="sidebar border-menu">
        <div class="position-sticky sidebar-sticky">
            <nav class="LOGO-nav">
                <a href="/sayfalar/anasayfa_00.html"><img src="../../resimler/toothLogo-removebg-preview.png" class="LOGO"></a>
                <a class="navbar-brand LOGO-Title" href="/sayfalar/Ana_Sayfa/anasayfa_00.html">I-DENTIST</a>
            </nav>
            <hr>
            <br>
            <ul class="nav flex-column px-3 ">
                <li class="nav-item mb-2" align="center">
                    <a class="nav-link menu-link" href="/sayfalar/hasta_listesi/Hasta_Listesi.html">Hasta Listesi</a>
                </li>
                <li class="nav-item mb-2" align="center">
                    <a class="nav-link menu-link" href="/sayfalar/Randevu_Kayit/Randevu_listesi.html">Randevular</a>
                </li>
                <li class="nav-item mb-2" align="center">
                    <a class="nav-link menu-link" href="/sayfalar/Gecmis_Randevular/Gecmis-Randevular.html">Geçmiş</a>
                </li>
                <li class="nav-item mb-2" align="center">
                    <a class="nav-link menu-link" href="/sayfalar/Hesabim/Hesabim.html">Hesabim</a>
                </li>
            </ul>
        </div>
    </div>`;

    main_templateDom.innerHTML = template;
    main_templateDom.classList.add("col-lg-2");

    // Add fixed positioning to sidebar
    const sidebar = main_templateDom.querySelector('.sidebar');
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.bottom = '0';
    sidebar.style.overflowY = 'auto';
    sidebar.style.width = '200px';  // Adjust based on the actual width of your sidebar
}

// Adjust the content to avoid overlapping with the fixed sidebar
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    if (content) {
        content.style.marginLeft = '200px';  // Adjust based on the actual width of your sidebar
    }
});
