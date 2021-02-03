import React, { Component } from 'react';
import { sendFetch } from './Shared'

export class Login extends Component {

  state = {
    eposta: '',
    sifre: '',
    hata: false
  }
  constructor() {
    super()

    this.giriyap = this.giriyap.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  //sunucuya gönder formu
  async giriyap(event) {
    //sayfa yenilemeyi durdur
    event.preventDefault();
    // url e bu bilgileri post et json formatında
    try {
      this.setState({ hata: false })
      var result = await sendFetch('/Yonetim/PersonelGirisYap', JSON.stringify({
        eposta: this.state.eposta,
        sifre: this.state.sifre
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
    } catch (error) {
      this.setState({ hata: true })
    }

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
        <h1 style={{ textAlign: 'center' }}>Giriş Yap!</h1>
        {/* ekran 12 parçaya bölünmüş bu form sadece altınısı kullansın diye col-6 */}
        <form className="offset-md-3 col-md-6" onSubmit={this.giriyap}>
          {this.state.hata && <div className="alert alert-danger">Eposta yada Şifre Hatalı</div>}
          <div className="form-group">
            <label className="control-label">Eposta</label>
            <input value={this.state.eposta} onChange={this.handleChange} type="email" name="eposta" className="form-control" required />
          </div>
          <div className="form-group">
            <label className="control-label">Parola</label>
            <input value={this.state.sifre} onChange={this.handleChange} type="password" name="sifre" className="form-control" required />
          </div>
          <button className="btn btn-primary btn-block">Giriş Yap!</button>
        </form>
      </div>
    );
  }
}
