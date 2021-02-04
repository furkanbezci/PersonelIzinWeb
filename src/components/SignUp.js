import React, { Component } from 'react';
import { sendFetch } from './Shared'

export class SignUp extends Component {

  state = {
    adi: '',
    soyadi: '',
    eposta: '',
    sifre: ''
  }
  constructor() {
    super()
    this.kaydet = this.kaydet.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  //sunucuya gönder formu
  async kaydet(event) {
    //sayfa yenilemeyi durdur
    event.preventDefault();
    // url e bu bilgileri post et json formatında
    var result = await sendFetch('/Yonetim/PersonelKayitOl', JSON.stringify({
      adi: this.state.adi,
      soyadi: this.state.soyadi,
      eposta: this.state.eposta,
      sifre: this.state.sifre,
      yoneticiKodu: null
    }))
    //gelen verileri aldık
    console.log(result)

    //gelen bilgiler tarayıcı üzerine kayıt ediliyor
    localStorage.setItem("adi", result.adi)
    localStorage.setItem("eposta", result.eposta)
    localStorage.setItem("kalanIzinGunSayisi", result.kalanIzinGunSayisi)
    localStorage.setItem("personelKodu", result.personelKodu)
    localStorage.setItem("sifre", result.sifre)
    localStorage.setItem("soyadi", result.soyadi)
    localStorage.setItem("yoneticiKodu", result.yoneticiKodu)

    //anasayfaya yönlendir
    this.props.history.push("/");

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
        <h1 style={{ textAlign: 'center' }}>Kayıt Ol!</h1>
        {/* ekran 12 parçaya bölünmüş bu form sadece altınısı kullansın diye col-6 */}
        <form className="offset-md-3 col-md-6" onSubmit={this.kaydet}>
          <div className="row">
            <div className="form-group col-6">
              <label className="control-label">Ad</label>
              <input value={this.state.adi} onChange={this.handleChange} name="adi" className="form-control" maxLength="20" required />
            </div>
            <div className="form-group col-6">
              <label className="control-label">Soyad</label>
              <input value={this.state.soyadi} onChange={this.handleChange} name="soyadi" className="form-control" maxLength="50" required />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">Eposta</label>
            <input value={this.state.eposta} onChange={this.handleChange} type="email" name="eposta" className="form-control" required />
          </div>
          <div className="form-group">
            <label className="control-label">Parola</label>
            <input value={this.state.sifre} onChange={this.handleChange} type="password" name="sifre" className="form-control" required />
          </div>
          <button className="btn btn-primary btn-block">Kayıt Ol!</button>
        </form>
      </div>
    );
  }
}
