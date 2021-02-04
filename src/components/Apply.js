import React, { Component } from 'react';
import { sendFetch } from './Shared'


export class Apply extends Component {

  state = {
    kalanIzinGunSayisi: localStorage.getItem("kalanIzinGunSayisi"),
    izinBaslangicTarihi: '',
    izinBitisTarihi: '',
    basarili: null,
    izinListesi: []
  }
  constructor() {
    super()
    this.kaydet = this.kaydet.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.verileriGetir()
  }
  async verileriGetir() {
    var result = await sendFetch('/Yonetim/PersonelIzinListesi', JSON.stringify({
      personelKodu: localStorage.getItem("personelKodu")
    }))

    this.setState({ izinListesi: result })
  }

  //sunucuya gönder formu
  async kaydet(event) {
    //sayfa yenilemeyi durdur
    event.preventDefault();
    // url e bu bilgileri post et json formatında


    if (this.state.kalanIzinGunSayisi < 0) return

    await sendFetch('/Yonetim/PersonelIzinTalep', JSON.stringify({
      personelKodu: localStorage.getItem("personelKodu"),
      yoneticiKodu: localStorage.getItem("yoneticiKodu"),
      durum: null,
      izinBaslangicTarihi: this.state.izinBaslangicTarihi,
      izinBitisTarihi: this.state.izinBitisTarihi,
    }))
    await this.verileriGetir()



    this.setState({
      izinBaslangicTarihi: '',
      izinBitisTarihi: '',
      basarili: true
    })
  }

  handleChange(event) {

    //inputların verileri kayıt ettik
    //hangi input adı gonderilmiş event.target.name ile aldık
    //hangi veri gönderilmiş event.target.value ile alıp eşitledik
    this.setState({ [event.target.name]: event.target.value });


    var fark = this.calcBusinessDays(new Date(this.state.izinBaslangicTarihi), new Date(event.target.value));
    fark = parseInt(localStorage.getItem("kalanIzinGunSayisi")) - fark;
    if (fark)
      this.setState({ kalanIzinGunSayisi: fark });

  }

  calcBusinessDays(dDate1, dDate2) { // input given as Date objects
    debugger
    if (dDate1 == "" || dDate2 == "") return
    debugger
    var iWeeks, iDateDiff, iAdjust = 0;
    if (dDate2 < dDate1) return -1; // error code if dates transposed
    var iWeekday1 = dDate1.getDay(); // day of week
    var iWeekday2 = dDate2.getDay();
    iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1; // change Sunday from 0 to 7
    iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;
    if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1; // adjustment if both days on weekend
    iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1; // only count weekdays
    iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;

    // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
    iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000)

    if (iWeekday1 < iWeekday2) { //Equal to makes it reduce 5 days
      iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
    } else {
      iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
    }

    iDateDiff -= iAdjust // take into account both days on weekend

    return (iDateDiff + 1); // add 1 because dates are inclusive
  }
  render() {
    return (
      <div>
        {/* ekran 12 parçaya bölünmüş bu form sadece altınısı kullansın diye col-6 */}
        <div className="row">
          {this.state.kalanIzinGunSayisi < 0 && <div className="alert alert-danger col-md-12">Kalan İzin Gün Sayınız Yeterli Değildir</div>}
          <div className="col-md-8">
            <h2>Kalan İzin Sayısı {this.state.kalanIzinGunSayisi}</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">İzin Baslangic Tarihi</th>
                  <th scope="col">İzin Bitiş Tarihi</th>
                  <th scope="col">İzin Talep Tarihi</th>

                  <th scope="col">Durum</th>
                  <th scope="col">Red Sebebi</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.izinListesi.map(s => <tr>
                    <th scope="row">{s.id}</th>
                    <td>{s.izinBaslangicTarihi.split("T")[0]}</td>
                    <td>{s.izinBitisTarihi.split("T")[0]}</td>
                    <td>{s.islemTarihi.split("T")[0]}</td>

                    <td>{s.durum == null ? "Bekliyor" : s.durum ? "Onaylandı" : "Red Edildi"}</td>
                    <td>{s.redSebebi}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <form className="col-md-12" onSubmit={this.kaydet}>
              <h2>İzin Talep Ekle</h2>
              <div className="form-group">
                <label className="control-label">İzin Baslangiç Tarihi</label>
                <input type="date" value={this.state.izinBaslangicTarihi} onChange={this.handleChange} name="izinBaslangicTarihi" className="form-control"
                  min={new Date().toISOString().split("T")[0]} max={this.state.izinBitisTarihi}
                  required />
              </div>
              <div className="form-group">
                <label className="control-label">İzin Bitiş Tarihi</label>
                <input type="date" value={this.state.izinBitisTarihi} onChange={this.handleChange} name="izinBitisTarihi" className="form-control"
                  min={this.state.izinBaslangicTarihi}
                  required />
              </div>
              <button className="btn btn-primary btn-block">Kaydet</button>
            </form>
          </div>
        </div>


      </div>
    );
  }
}
