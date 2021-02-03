import React, { Component } from 'react';
import { sendFetch } from './Shared'

export class Employe extends Component {

  state = {
    adi: '',
    soyadi: '',
    eposta: '',
    sifre: '',
    personelListesi: []
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
    var result = await sendFetch('/Yonetim/PersonelListesi', JSON.stringify({
      yoneticiKodu: localStorage.getItem("personelKodu")
    }))

    this.setState({ personelListesi: result })
  }

  //sunucuya gönder formu
  async kaydet(event) {
    //sayfa yenilemeyi durdur
    event.preventDefault();
    // url e bu bilgileri post et json formatında
     await sendFetch('/Yonetim/PersonelKayitOl', JSON.stringify({
      adi: this.state.adi,
      soyadi: this.state.soyadi,
      eposta: this.state.eposta,
      sifre: this.state.sifre,
      yoneticiKodu: localStorage.getItem("personelKodu")
    }))
    await this.verileriGetir()

    this.setState({
      adi: '',
      soyadi: '',
      eposta: '',
      sifre: '',
    })
  }

  //sunucuya gönder formu
  async sil(personelKodu) {
    // url e bu bilgileri post et json formatında
    await sendFetch('/Yonetim/PersonelSil', JSON.stringify({
      yoneticiKodu: localStorage.getItem("personelKodu"),
      personelKodu
    }))
    await this.verileriGetir()
  }

  handleChange(event) {
    //inputların verileri kayıt ettik
    //hangi input adı gonderilmiş event.target.name ile aldık
    //hangi veri gönderilmiş event.target.value ile alıp eşitledik
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        {/* ekran 12 parçaya bölünmüş bu form sadece altınısı kullansın diye col-6 */}
        <div className="row">
          <div className="col-md-6">
            <h2>Personel Listesi</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ad Soyad</th>
                  <th scope="col">Eposta</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.personelListesi.map(s => <tr>
                    <th scope="row">{s.personelKodu}</th>
                    <td>{s.adi} {s.soyadi}</td>
                    <td>{s.eposta}</td>
                    <td><button className="btn btn-danger btn-sm" onClick={() => this.sil(s.personelKodu)}>Sil</button></td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <form className="col-md-12" onSubmit={this.kaydet}>
              <h2>Personel Ekle</h2>
              <div className="form-group">
                <label className="control-label">Ad</label>
                <input value={this.state.adi} onChange={this.handleChange} name="adi" className="form-control" maxLength="20" required />
              </div>
              <div className="form-group">
                <label className="control-label">Soyad</label>
                <input value={this.state.soyadi} onChange={this.handleChange} name="soyadi" className="form-control" maxLength="50" required />
              </div>
              <div className="form-group">
                <label className="control-label">Eposta</label>
                <input value={this.state.eposta} onChange={this.handleChange} type="email" name="eposta" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="control-label">Parola</label>
                <input value={this.state.sifre} onChange={this.handleChange} type="password" name="sifre" className="form-control" required />
              </div>
              <button className="btn btn-primary btn-block">Kaydet</button>
            </form>
          </div>
        </div>


      </div>
    );
  }
}
