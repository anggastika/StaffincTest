import { addLog, click, selectVisibleText, setText } from "src/utils/commands";
import waitForDisplayed from "webdriverio/build/commands/element/waitForDisplayed";

class staffincPage {
    private get mauKerjaDimana() { return $("//body/div[@id='__next']/div[1]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div[1]/div[1]") }
    private get lokasiPekerjaan() { return $("//body/div[@id='__next']/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]") }
    private get cariProvinsi() { return $("//body/div[@id='__next']/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")}
    private get txtCariProvinsi() { return $("//body/div[@id='__next']/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/input[1]")}
    private get provinceElement() { return $("//span[contains(text(),'Jawa Barat')]")}
    private get txtCariKota() {return $("//span[contains(text(),'Cari Kota')]")}
    private get cityElement() {return $("//span[contains(text(),'Kota Bandung')]")}
    private get inputCariKota() {{return $("//body/div[@id='__next']/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/input[1]")}}
    
    //span[contains(text(),'Kota Bandung')]
    //body/div[@id='__next']/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/input[1]

    async setlocation() {
       await click(this.mauKerjaDimana);
       await click(this.lokasiPekerjaan);
       await click(this.cariProvinsi);
       await this.txtCariProvinsi.waitForDisplayed();
       await this.txtCariProvinsi.setValue("Jawa Barat");
       await click(this.provinceElement);
       await click(this.txtCariKota);
       await this.txtCariKota.waitForDisplayed();
       await this.inputCariKota.setValue("Bandung");
    }

}
export default new staffincPage()