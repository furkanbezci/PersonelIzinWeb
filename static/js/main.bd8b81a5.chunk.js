(this.webpackJsonppersonelizinyonetim=this.webpackJsonppersonelizinyonetim||[]).push([[0],{34:function(e,t,a){e.exports=a(55)},40:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(19),l=a.n(i),s=a(16),o=a(8),c=a(9),u=a(11),m=a(10),d=a(12),h=a(57),p=a(6),f=a(56),b=a(58),g=a(59),y=a(62),v=a(60),E=a(61),k=(a(40),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={kullanici:null},n.toggleNavbar=n.toggleNavbar.bind(Object(p.a)(n)),n.state={collapsed:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({kullanici:localStorage.getItem("personelKodu")})}},{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen((function(t,a){"/login"!=t.pathname&&"/signup"!=t.pathname||localStorage.clear(),e.setState({kullanici:localStorage.getItem("personelKodu")})}))}},{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(f.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},r.a.createElement(h.a,null,r.a.createElement(b.a,{tag:s.b,to:"/"},"Personel \u0130zin Y\xf6netim"),r.a.createElement(g.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(y.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},r.a.createElement(v.a,null,this.state.kullanici?r.a.createElement(E.a,{tag:s.b,className:"text-dark",to:"/"},"Anasayfa"):null),r.a.createElement(v.a,null,this.state.kullanici?r.a.createElement(E.a,{tag:s.b,className:"text-dark",to:"/login"},"\xc7\u0131k\u0131\u015f Yap"):null),r.a.createElement(v.a,null,this.state.kullanici?null:r.a.createElement(E.a,{tag:s.b,className:"text-dark",to:"/signup"},"Kay\u0131t Ol")),r.a.createElement(v.a,null,this.state.kullanici?null:r.a.createElement(E.a,{tag:s.b,className:"text-dark",to:"/login"},"Giri\u015f Yap")))))))}}]),a}(n.Component));k.displayName=k.name;var N=Object(d.e)(k),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(h.a,null,this.props.children))}}]),a}(n.Component);S.displayName=S.name;var O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Ho\u015f Geldiniz ","null"==localStorage.getItem("yoneticiKodu")?"Y\xf6netici ":" "," ",localStorage.getItem("adi")," ",localStorage.getItem("soyadi")),r.a.createElement("div",{className:"row"},"null"==localStorage.getItem("yoneticiKodu")?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Personel Y\xf6netim"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Sistemdeki Personellerinizi burada tutabilirsiniz"),r.a.createElement(E.a,{tag:s.b,className:"btn btn-success",to:"/employe"},"Personel Ekle"))):null,"null"!=localStorage.getItem("yoneticiKodu")?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"\u0130zin Talep"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"\u0130zin Talep Edebilirsiniz"),r.a.createElement(E.a,{tag:s.b,className:"btn btn-info",to:"/apply"},"\u0130zin Talep Ekle"))):null,"null"==localStorage.getItem("yoneticiKodu")?r.a.createElement("div",{className:"card offset-md-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Onay Listesi"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Personellerin G\xf6nderdikleri \u0130zin Taleplerini G\xf6rebilirsiniz"),r.a.createElement(E.a,{tag:s.b,className:"btn btn-info",to:"/applylist"},"Onay Listesi"))):null))}}]),a}(n.Component);O.displayName=O.name;var j=a(18),w=a(3),z=a.n(w),x=a(7),C=function(){var e=Object(x.a)(z.a.mark((function e(t,a){var n,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://54.93.233.230:5000"+t,{method:"post",headers:{"content-type":"application/json"},body:a});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={redSebebi:null,izinListesi:[],rowindex:-1,item:null,reded:""},e.kaydet=e.kaydet.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.verileriGetir()}},{key:"verileriGetir",value:function(){var e=Object(x.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/Yonetim/OnayListesi",JSON.stringify({}));case 2:t=e.sent,this.setState({izinListesi:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"redet",value:function(){var e=Object(x.a)(z.a.mark((function e(t,a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({item:t,rowindex:a});case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"onayla",value:function(){var e=Object(x.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.yoneticiKodu=parseInt(localStorage.getItem("personelKodu")),t.durum=!0,e.next=4,this.kaydet(t);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"redetkaydet",value:function(){var e=Object(x.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.state.item).yoneticiKodu=parseInt(localStorage.getItem("personelKodu")),t.durum=!1,t.redSebebi=this.state.reded,this.setState({rowindex:-1,reded:""}),e.next=8,this.kaydet(t);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"kaydet",value:function(){var e=Object(x.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/Yonetim/DurumGuncelle",JSON.stringify(t));case 2:return e.next=4,this.verileriGetir();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Personel"),r.a.createElement("th",{scope:"col"},"\u0130zin Baslangic Tarihi"),r.a.createElement("th",{scope:"col"},"\u0130zin Biti\u015f Tarihi"),r.a.createElement("th",{scope:"col"},"\u0130zin Biti\u015f Tarihi"),r.a.createElement("th",{scope:"col"},"Durum"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.izinListesi.map((function(t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t.o.id),r.a.createElement("td",null,t.p.adi," ",t.p.soyadi),r.a.createElement("td",null,t.o.izinBaslangicTarihi.split("T")[0]),r.a.createElement("td",null,t.o.izinBitisTarihi.split("T")[0]),r.a.createElement("td",null,t.o.guncelIzinGunSayisi),r.a.createElement("td",null,null==t.o.durum?"Bekliyor":t.o.durum?"Onayland\u0131":"Red Edildi"),r.a.createElement("td",null,-1==e.state.rowindex&&null==t.o.durum&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.onayla(t.o)},style:{marginRight:5},class:"btn btn-outline-success btn-sm"},"Onayla"),r.a.createElement("button",{onClick:function(){return e.redet(t.o,a)},class:"btn btn-outline-danger btn-sm"},"Reddet")),e.state.rowindex==a&&r.a.createElement("div",null,r.a.createElement("input",{className:"form-control",name:"reded",value:e.state.reded,onChange:e.handleChange}),r.a.createElement("button",{class:"btn btn-outline-danger btn-sm",onClick:function(){return e.redetkaydet()}},"Kaydet"))))})))))}}]),a}(n.Component),K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={kalanIzinGunSayisi:localStorage.getItem("kalanIzinGunSayisi"),izinBaslangicTarihi:"",izinBitisTarihi:"",basarili:null,izinListesi:[]},e.kaydet=e.kaydet.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.verileriGetir()}},{key:"verileriGetir",value:function(){var e=Object(x.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/Yonetim/PersonelIzinListesi",JSON.stringify({personelKodu:localStorage.getItem("personelKodu")}));case 2:t=e.sent,this.setState({izinListesi:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"kaydet",value:function(){var e=Object(x.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(this.state.kalanIzinGunSayisi<0)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,C("/Yonetim/PersonelIzinTalep",JSON.stringify({personelKodu:localStorage.getItem("personelKodu"),yoneticiKodu:localStorage.getItem("yoneticiKodu"),durum:null,izinBaslangicTarihi:this.state.izinBaslangicTarihi,izinBitisTarihi:this.state.izinBitisTarihi}));case 5:return e.next=7,this.verileriGetir();case 7:this.setState({izinBaslangicTarihi:"",izinBitisTarihi:"",basarili:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value));var t=this.calcBusinessDays(new Date(this.state.izinBaslangicTarihi),new Date(this.state.izinBitisTarihi));(t=parseInt(localStorage.getItem("kalanIzinGunSayisi"))-t)&&this.setState({kalanIzinGunSayisi:t})}},{key:"calcBusinessDays",value:function(e,t){if(""!=e&&""!=t){var a,n,r=0;if(t<e)return-1;var i=e.getDay(),l=t.getDay();return l=0==l?7:l,(i=0==i?7:i)>5&&l>5&&(r=1),i=i>5?5:i,l=l>5?5:l,a=Math.floor((t.getTime()-e.getTime())/6048e5),n=i<l?5*a+(l-i):5*(a+1)-(i-l),(n-=r)+1}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},this.state.kalanIzinGunSayisi<0&&r.a.createElement("div",{className:"alert alert-danger col-md-12"},"Kalan \u0130zin G\xfcn Say\u0131n\u0131z Yeterli De\u011fildir"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Kalan \u0130zin Say\u0131s\u0131 ",this.state.kalanIzinGunSayisi),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"\u0130zin Baslangic Tarihi"),r.a.createElement("th",{scope:"col"},"\u0130zin Biti\u015f Tarihi"),r.a.createElement("th",{scope:"col"},"Durum"),r.a.createElement("th",{scope:"col"},"Red Sebebi"))),r.a.createElement("tbody",null,this.state.izinListesi.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.izinBaslangicTarihi.split("T")[0]),r.a.createElement("td",null,e.izinBitisTarihi.split("T")[0]),r.a.createElement("td",null,null==e.durum?"Bekliyor":e.durum?"Onayland\u0131":"Red Edildi"),r.a.createElement("td",null,e.redSebebi))}))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{className:"col-md-12",onSubmit:this.kaydet},r.a.createElement("h2",null,"\u0130zin Talep Ekle"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"\u0130zin Baslangi\xe7 Tarihi"),r.a.createElement("input",{type:"date",value:this.state.izinBaslangicTarihi,onChange:this.handleChange,name:"izinBaslangicTarihi",className:"form-control",min:(new Date).toISOString().split("T")[0],max:this.state.izinBitisTarihi,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"\u0130zin Biti\u015f Tarihi"),r.a.createElement("input",{type:"date",value:this.state.izinBitisTarihi,onChange:this.handleChange,name:"izinBitisTarihi",className:"form-control",min:this.state.izinBaslangicTarihi,required:!0})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Kaydet")))))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={adi:"",soyadi:"",eposta:"",sifre:""},e.kaydet=e.kaydet.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"kaydet",value:function(){var e=Object(x.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C("/Yonetim/PersonelKayitOl",JSON.stringify({adi:this.state.adi,soyadi:this.state.soyadi,eposta:this.state.eposta,sifre:this.state.sifre,yoneticiKodu:null}));case 3:a=e.sent,console.log(a),localStorage.setItem("adi",a.adi),localStorage.setItem("eposta",a.eposta),localStorage.setItem("kalanIzinGunSayisi",a.kalanIzinGunSayisi),localStorage.setItem("personelKodu",a.personelKodu),localStorage.setItem("sifre",a.sifre),localStorage.setItem("soyadi",a.soyadi),localStorage.setItem("yoneticiKodu",a.yoneticiKodu),this.props.history.push("/");case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Kay\u0131t Ol!"),r.a.createElement("form",{className:"offset-md-3 col-md-6",onSubmit:this.kaydet},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",{className:"control-label"},"Ad"),r.a.createElement("input",{value:this.state.adi,onChange:this.handleChange,name:"adi",className:"form-control",maxLength:"20",required:!0})),r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",{className:"control-label"},"Soyad"),r.a.createElement("input",{value:this.state.soyadi,onChange:this.handleChange,name:"soyadi",className:"form-control",maxLength:"50",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Eposta"),r.a.createElement("input",{value:this.state.eposta,onChange:this.handleChange,type:"email",name:"eposta",className:"form-control",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Parola"),r.a.createElement("input",{value:this.state.sifre,onChange:this.handleChange,type:"password",name:"sifre",className:"form-control",required:!0})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Kay\u0131t Ol!")))}}]),a}(n.Component),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={eposta:"",sifre:"",hata:!1},e.giriyap=e.giriyap.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"giriyap",value:function(){var e=Object(x.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,this.setState({hata:!1}),e.next=5,C("/Yonetim/PersonelGirisYap",JSON.stringify({eposta:this.state.eposta,sifre:this.state.sifre}));case 5:a=e.sent,console.log(a),localStorage.setItem("adi",a.adi),localStorage.setItem("eposta",a.eposta),localStorage.setItem("kalanIzinGunSayisi",a.kalanIzinGunSayisi),localStorage.setItem("personelKodu",a.personelKodu),localStorage.setItem("sifre",a.sifre),localStorage.setItem("soyadi",a.soyadi),localStorage.setItem("yoneticiKodu",a.yoneticiKodu),this.props.history.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),this.setState({hata:!0});case 20:case"end":return e.stop()}}),e,this,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Giri\u015f Yap!"),r.a.createElement("form",{className:"offset-md-3 col-md-6",onSubmit:this.giriyap},this.state.hata&&r.a.createElement("div",{className:"alert alert-danger"},"Eposta yada \u015eifre Hatal\u0131"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Eposta"),r.a.createElement("input",{value:this.state.eposta,onChange:this.handleChange,type:"email",name:"eposta",className:"form-control",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Parola"),r.a.createElement("input",{value:this.state.sifre,onChange:this.handleChange,type:"password",name:"sifre",className:"form-control",required:!0})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Giri\u015f Yap!")))}}]),a}(n.Component),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={adi:"",soyadi:"",eposta:"",sifre:"",personelListesi:[]},e.kaydet=e.kaydet.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.verileriGetir()}},{key:"verileriGetir",value:function(){var e=Object(x.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/Yonetim/PersonelListesi",JSON.stringify({yoneticiKodu:localStorage.getItem("personelKodu")}));case 2:t=e.sent,this.setState({personelListesi:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"kaydet",value:function(){var e=Object(x.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C("/Yonetim/PersonelKayitOl",JSON.stringify({adi:this.state.adi,soyadi:this.state.soyadi,eposta:this.state.eposta,sifre:this.state.sifre,yoneticiKodu:localStorage.getItem("personelKodu")}));case 3:return e.next=5,this.verileriGetir();case 5:this.setState({adi:"",soyadi:"",eposta:"",sifre:""});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sil",value:function(){var e=Object(x.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/Yonetim/PersonelSil",JSON.stringify({yoneticiKodu:localStorage.getItem("personelKodu"),personelKodu:t}));case 2:return e.next=4,this.verileriGetir();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Personel Listesi"),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Ad Soyad"),r.a.createElement("th",{scope:"col"},"Eposta"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.personelListesi.map((function(t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t.personelKodu),r.a.createElement("td",null,t.adi," ",t.soyadi),r.a.createElement("td",null,t.eposta),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.sil(t.personelKodu)}},"Sil")))}))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{className:"col-md-12",onSubmit:this.kaydet},r.a.createElement("h2",null,"Personel Ekle"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Ad"),r.a.createElement("input",{value:this.state.adi,onChange:this.handleChange,name:"adi",className:"form-control",maxLength:"20",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Soyad"),r.a.createElement("input",{value:this.state.soyadi,onChange:this.handleChange,name:"soyadi",className:"form-control",maxLength:"50",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Eposta"),r.a.createElement("input",{value:this.state.eposta,onChange:this.handleChange,type:"email",name:"eposta",className:"form-control",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Parola"),r.a.createElement("input",{value:this.state.sifre,onChange:this.handleChange,type:"password",name:"sifre",className:"form-control",required:!0})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Kaydet")))))}}]),a}(n.Component),L=(a(54),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement(d.a,{exact:!0,path:"/",component:O}),r.a.createElement(d.a,{exact:!0,path:"/signup",component:T}),r.a.createElement(d.a,{exact:!0,path:"/login",component:B}),r.a.createElement(d.a,{exact:!0,path:"/employe",component:G}),r.a.createElement(d.a,{exact:!0,path:"/employe",component:G}),r.a.createElement(d.a,{path:"/apply",component:K}),r.a.createElement(d.a,{path:"/applylist",component:I}))}}]),a}(n.Component));L.displayName=L.name;var P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=document.getElementsByTagName("base")[0].getAttribute("href"),q=document.getElementById("root");l.a.render(r.a.createElement(s.a,{basename:Y},r.a.createElement(L,null)),q),function(){if("serviceWorker"in navigator){if(new URL("/PersonelIzinWeb",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/PersonelIzinWeb","/service-worker.js");P?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):D(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.bd8b81a5.chunk.js.map