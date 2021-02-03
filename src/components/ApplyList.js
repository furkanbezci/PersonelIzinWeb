import React, { Component } from 'react';
import { sendFetch } from './Shared'


export class ApplyList extends Component {

  state = {
    redSebebi: null,
    izinListesi: [],
    rowindex: -1,
    item: null,
    reded: ''
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
    var result = await sendFetch('/Yonetim/OnayListesi', JSON.stringify({
    }))
    debugger
    this.setState({ izinListesi: result })
  }

  async redet(item, i) {
    this.setState({ item, rowindex: i })
  }
  async onayla(item) {
    item.yoneticiKodu = parseInt(localStorage.getItem("personelKodu"));
    item.durum = true;

    await this.kaydet(item);
  }
  async redetkaydet() {
    debugger
    var item = this.state.item
    item.yoneticiKodu = parseInt(localStorage.getItem("personelKodu"));
    item.durum = false;
    item.redSebebi = this.state.reded
    this.setState({ rowindex: -1, reded: '' })
    await this.kaydet(item);
  }
  //sunucuya gönder formu
  async kaydet(item) {
    // url e bu bilgileri post et json formatında

    await sendFetch('/Yonetim/DurumGuncelle', JSON.stringify(item))
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Personel</th>
              <th scope="col">İzin Baslangic Tarihi</th>
              <th scope="col">İzin Bitiş Tarihi</th>
              <th scope="col">İzin Bitiş Tarihi</th>
              <th scope="col">Durum</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.izinListesi.map((s, i) =>
                <tr>
                  <th scope="row">{s.o.id}</th>
                  <td>{s.p.adi} {s.p.soyadi}</td>
                  <td>{s.o.izinBaslangicTarihi.split("T")[0]}</td>
                  <td>{s.o.izinBitisTarihi.split("T")[0]}</td>
                  <td>{s.o.guncelIzinGunSayisi}</td>
                  <td>{s.o.durum == null ? "Bekliyor" : s.o.durum ? "Onaylandı" : "Red Edildi"}</td>
                  <td>
                    {
                      this.state.rowindex == -1 && s.o.durum == null && <div>
                        <button onClick={() => this.onayla(s.o)} style={{ marginRight: 5 }} class="btn btn-outline-success btn-sm">Onayla</button>
                        <button onClick={() => this.redet(s.o, i)} class="btn btn-outline-danger btn-sm">Reddet</button>
                      </div>
                    }
                    {this.state.rowindex == i && <div>
                      <input className="form-control" name="reded" value={this.state.reded} onChange={this.handleChange} />
                      <button class="btn btn-outline-danger btn-sm" onClick={() => this.redetkaydet()}>Kaydet</button>
                    </div>}
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}
