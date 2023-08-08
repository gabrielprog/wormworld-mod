var AUTOMATICPILOT = false;
var wormworld_version = 2;
var joystick = null;
var luaDeCristal = 1;
var auxlist = {};
var animationLib = {loaded: false, sprites: {}, textures: {}, resources: {}};
var sound_wwc = {ref: [], hs: {}, fxdo: p => {
  if (bbs.activeSounds2 && bbs.start) {
    if (!sound_wwc[p].playing()) {
      sound_wwc[p].play();
    }
  }
}, fxAux: (zarrien, sahrai) => {
  if (sahrai === 1 && !sound_wwc.fxStatus.top1) {
    sound_wwc.fxStatus.top1 = true;
    sound_wwc.fxdo("top1");
  }
  ;
  return zarrien;
}, fxStatus: {top1: false}};
const _wwcio = {obj: {}, joinRoom: () => {}, leaveRoom: () => {}, playerScored: () => {}, leaderboardUpdated: (rozier, mosiah) => {
  updateTop10Hs(rozier, mosiah);
}};
const _wwc = {customPaths: {map: null}, _ass_type: [], testSkinMod: function (meriel) {
  let lavelda = typeof meriel === "string";
  return lavelda ? false : meriel > 1296 && meriel < 8999;
}, testWear: function (koreon) {
  return koreon >= 399 && koreon < 1295;
}, isNumberValid: function (yasmany) {
  return yasmany !== "" && yasmany !== null && yasmany !== undefined && !isNaN(yasmany);
}, validInput: function (cashten) {
  let lanisa = _wwc.testSkinMod(cashten);
  let terasa = typeof cashten === "string";
  if (!lanisa && !terasa) {
    return cashten;
  }
  ;
  try {
    let bennie = $("#inputReplaceSkin").val();
    return encodeURI(_wwc.isNumberValid(bennie) ? bennie : bbs.idReplaceSkin || 35);
  } catch (e) {
    return encodeURI(35);
  }
}, fullscreen: null, joystick: tylee => {
  const khadesha = {checked: true, color: bbs.joystick && bbs.joystick.color || "red"};
  tylee = bbs.mode || "dynamic";
  if (tylee === "dynamic") {
    return khadesha;
  }
  ;
  khadesha.position = {bottom: "100px"};
  khadesha.position[bbs.joystick.positionMode === "L" ? "left" : "right"] = "110px";
  return khadesha;
}, load_con: () => {
  $(".selecionar-sala-v2").click(function (xariyah) {
    xariyah.preventDefault();
    let shruti = $(this).attr("data-con") || bbs.con;
    let rawda = $(this).attr("data-type");
    w2c2020.addRoom($(this).attr("data-room"));
    _anApp.dh.Zp = function (deke, declynn, kyrelle) {
      bbs.con = kyrelle ? deke : shruti || deke;
      _wwc.Zp(bbs.con, declynn);
    };
    _anApp.Pn();
  });
}, fnSaveGame: function () {
  var tkai = $("#saveGame");
  tkai.prop("checked", bbs.saveGame);
  tkai.change(function () {
    if (!this.checked) {
      let dameria = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù� Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
      $(this).prop("checked", !dameria);
      if (!this.checked) {
        _wwc.fnSetCounts("zerar");
      }
    }
    ;
    bbs.saveGame = this.checked;
    w2c2020.hsTotal.alpha = this.checked ? 1 : 0;
    w2c2020.killTotal.alpha = this.checked ? 1 : 0;
    localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
  });
}, fnSetCounts: function (candy, gaelen) {
  let evylene = function (jameison, pharoah, cru, nitai) {
    _wwc.setCountGame(jameison, pharoah, cru, nitai);
  };
  if (candy === "count") {
    bbs.kill = (bbs.kill || 0) + (gaelen ? 0 : 1);
    bbs.headshot = (bbs.headshot || 0) + (gaelen ? 1 : 0);
    bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
    bbs.tkill = bbs.tkill + (gaelen ? 0 : 1);
    bbs.theadshot = bbs.theadshot + (gaelen ? 1 : 0);
  }
  ;
  if (candy === "open") {
    bbs.kill = 0;
    bbs.headshot = 0;
    if (bbs.saveGame) {}
  }
  ;
  if (candy === "close") {
    if (bbs.saveGame) {
      bbs.died = (bbs.died || 0) + 1;
    } else {
      _wwc.fnSetCounts("zerar");
    }
  }
  ;
  if (candy === "zerar") {
    bbs.kill = 0;
    bbs.tkill = 0;
    bbs.headshot = 0;
    bbs.theadshot = 0;
    bbs.died = 0;
  }
  ;
  evylene(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
}, setCountGame: function (tanyra, bettejo, sophieann, chayim) {
  if (!bbs.saveGame) {
    w2c2020.hsTotal.alpha = 0;
    w2c2020.killTotal.alpha = 0;
  }
  ;
  w2c2020.hs.text = bettejo;
  w2c2020.hsTotal.text = chayim;
  w2c2020.kill.text = tanyra;
  w2c2020.killTotal.text = sophieann;
}, ismobile: mcheck(), Zp: void 0};
const bbs = {version: 0, headshot: 0, kill: 0, theadshot: 0, tkill: 0, died: 0, start: new Date, HOL: 0, tk: null, country: null, finish: 0, saveGame: false, idReplaceSkin: 34, mobile: false, joystick: null, display: {clock: {x: 60, y: 60}, top: {x: 225, y: 1}, default: false, custom: false, m: {x: 60, y: 60}, r: {x: 225, y: 1}, ms: false}, PropertyManager: {}, acs: true, lr: false, showTophs: true, showRechs: true, con: null, params: "", arrow: true, activeBadLang: false, activeSounds2: true, activeZoom: false, activeZoomMobile: false};
const wwc_version = localStorage.getItem("wwc_version");
var bbs_local = localStorage.getItem("wwcSaveGame");
if (bbs_local) {
  bbs_local = JSON.parse(bbs_local);
}
;
for (let p in bbs_local) {
  if (p === "joystick") {
    if (!bbs[p]) {
      bbs[p] = _wwc.joystick();
    }
    ;
    for (let joy in bbs_local[p]) {
      bbs[p][joy] = bbs_local[p][joy];
    }
  } else {
    if (p === "display") {
      for (let d in bbs_local[p]) {
        bbs[p][d] = bbs_local[p][d];
      }
    } else {
      bbs[p] = bbs_local[p];
    }
  }
}
;
if (!bbs.version || bbs.version !== wormworld_version) {
  bbs.version = wormworld_version;
  bbs.joystick = _wwc.joystick();
}
;
bbs.loading = true;
const setconfigjoystick_checked = function (doratha) {
  if (!bbs.joystick) {
    bbs.joystick = _wwc.joystick();
  }
  ;
  bbs.joystick.checked = doratha.checked;
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
};
const setconfigjoystick_color = function (florene) {
  if (!bbs.joystick) {
    bbs.joystick = _wwc.joystick();
  }
  ;
  bbs.joystick.color = florene.value;
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
};
const setconfigjoystick_mode = function (princessa) {
  if (!bbs.joystick) {
    bbs.joystick = _wwc.joystick();
  }
  ;
  bbs.joystick.mode = princessa.value;
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
};
const setconfigjoystick_position = function (antroine) {
  if (!bbs.joystick) {
    bbs.joystick = _wwc.joystick();
  }
  ;
  bbs.joystick.position = {left: "75px", bottom: "75px"};
  if (antroine.value === "R") {
    bbs.joystick.position = {right: "75px", bottom: "75px"};
  }
  ;
  bbs.joystick.positionMode = antroine.value;
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
};
const setconfigjoystick_pxy = function (albino) {
  if (!bbs.joystick) {
    bbs.joystick = _wwc.joystick();
  }
  ;
  bbs.joystick.position = {left: (parseInt(albino.value) + 10).toString() + "px", bottom: albino.value + "px"};
  if (bbs.joystick.positionMode === "R") {
    bbs.joystick.position = {right: (parseInt(albino.value) + 10).toString() + "px", bottom: albino.value + "px"};
  }
  ;
  bbs.joystick.pxy = albino.value;
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
};
const setconfigjoystick_size = function (jurgen) {
  if (!bbs.joystick) {
    bbs.joystick = _wwc.joystick();
  }
  ;
  bbs.joystick.size = jurgen.value;
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
};
const setIdReplaceSkin = function (lincy) {
  bbs.idReplaceSkin = _wwc.isNumberValid(lincy.value) ? lincy.value : 32;
  localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
};
const respawnFn = rayven => {
  _anApp.dh.mq && _anApp.dh.mq.close();
  _anApp.dh.Zp = function (stann, jahda) {
    _wwc.Zp(bbs.con || stann, jahda);
  };
  _anApp.Pn();
};
$(`${'<button type="button" id="mm-wwc" style="float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;">Set</button>'}`).insertAfter("#mm-store");
$(".store-view-cont").append('<div id="idReplaceSkin"></div>');
$(".wear-view-cont").append('<div id="idWearViewCont"></div>');
$("body").append(`${'<div id="wwc-set-view" class="base-popup-view"\r\n        style="display: none;\r\n        position: relative;\r\n        background: #FFF;\r\n        padding: 10px 15px;\r\n        max-width: 660px;\r\n        margin: 10px auto;">\r\n    </div>'}`);
var mbfconst = (new Date).toJSON().slice(0, 10).replace(/-/g, "");
var mbf = {};
const autoFn = function (d) {
  var leayla = 30;
  var anastasija = 0;
  var branae = false;
  function tahlik() {
    var ethelann = parseFloat(_anApp.og.af.Bn);
    ethelann = (ethelann - 0.06) % (2 * Math.PI);
    if (ethelann < 0) {
      ethelann += 2 * Math.PI;
    }
    ;
    _anApp.og.af.Bn = ethelann.toFixed(2);
  }
  function hucksen(deboran) {
    AUTOMATICPILOT = setInterval(function () {
      if (deboran === 1) {
        anastasija = branae ? anastasija - 1 : anastasija + 1;
        if (anastasija % 80 === 0 && !branae) {
          leayla = leayla + 18;
          clearInterval(AUTOMATICPILOT);
          hucksen(1);
        }
      }
      ;
      tahlik();
    }, leayla);
  }
  if ((d == 7 || d.key == "7") && AUTOMATICPILOT === null) {
    _anApp.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
    hucksen(1);
    return;
  }
  ;
  if ((d == 8 || d.key == "8") && AUTOMATICPILOT === null) {
    _anApp.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
    hucksen(2);
    return;
  }
  ;
  if (AUTOMATICPILOT !== null) {
    clearInterval(AUTOMATICPILOT);
    _anApp.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
    AUTOMATICPILOT = null;
  }
};



mbf["mbf" + mbfconst + 1] = function () {
  luaDeCristal = luaDeCristal > 30 ? luaDeCristal : luaDeCristal + 0.25;
};
mbf["mbf" + mbfconst + 2] = function () {
  luaDeCristal = luaDeCristal <= 1 ? 1 : luaDeCristal - 0.25;
};
mbf["mbf" + mbfconst + 3] = function () {
  autoFn(AUTOMATICPILOT ? 0 : 8);
};
mbf["mbf" + mbfconst + 4] = function () {
  respawnFn();
};

function handleKeyPress(event) {
  if (event.key === "w") {
      if (luaDeCristal < 30) {
        luaDeCristal += 0.25;
      }
  } else if (event.key === "e") {
      if (luaDeCristal > 0.5) {
        luaDeCristal -= 0.25;
      }
  } else if (event.key === "q") {
      luaDeCristal = 1;
  }
}
document.addEventListener("keypress", handleKeyPress);

if (bbs.activeZoom) {
  window.onwheel = bryna => {
    if (bryna.deltaY < 0) {
      if (luaDeCristal > 0.5) {
        luaDeCristal -= 0.25;
      }
    } else {
      if (luaDeCristal < 30) {
        luaDeCristal += 0.25;
      }
    }
    ;
    w2c2020.zoom.text = "x" + luaDeCristal;
  };
}
;
$("#mm-advice-cont").html(`${'\r\n    <div class="wormworld-connect-count-b32">\r\n    <input type="button" value="F.SCREEN" id="btnFullScreen" style="margin-top:5px;width:100%;height: 35px;" />\r\n    <input type="button" value="RESPAWN" onclick="respawnFn()"\r\n    style="margin-top:5px;width:100%;background-color:#f7941d;color:#fff;border:0;height:35px;" />\r\n    <input type="button" value="SKINLAB" onclick="window.location.href=\'https://wormworld.io/skinlabapp\'"\r\n    style="margin-top:5px;width:100%;height: 35px;" />\r\n    </div>\r\n    '}`);
var IDRS = $("#idReplaceSkin");
const loadBase1Fn = async function (lexis, julianita) {
  if (julianita) {
    return;
  }
  ;
  if (!lexis) {
    lexis = _anApp.u.wi;
  }
  ;
  bbs.userId = lexis.userId;
  await fetch(URLSERV_WORMWORLD + "/load-page", {headers: {"Content-Type": "application/json", "x-access-token": bbs.tk}, method: "POST", body: JSON.stringify(lexis)}).then(function (dontravius) {
    dontravius.text().then(function (javiyon) {
      $(".description-text").html(javiyon);
      if (lexis.type === "error") {
        $(".description-text").html(lexis.msg);
      }
    });
  }).catch(function () {
    $(".description-text").html("Problema de conexão.");
  });
  await fetch(URLSERV_WORMWORLD + "/set-worm-world", {headers: {"Content-Type": "application/json", "x-access-token": bbs.tk}, method: "POST", body: JSON.stringify(bbs)}).then(function (taimani) {
    taimani.text().then(function (doriel) {
      $("#wwc-set-view").html(doriel);
      $("#mm-wwc").click(hyland => {
        $("#wwc-set-view").css("display", "block");
      });
      _wwc.load_con();
      _wwc.fnSaveGame();
      _wwc.fnSetCounts("start");
      $("#backgroundArena").change(function () {
        let deone = $(this).val();
        bbs.background = deone;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        _anApp.xe._g = $W.bgg(deone);
        window.location.reload();
      });
      let emyah = _wwc.isNumberValid(bbs.idReplaceSkin);
      if (emyah) {
        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
      } else {
        let patrisio = $("#inputReplaceSkin").val();
        emyah = _wwc.isNumberValid(patrisio);
        bbs.idReplaceSkin = emyah ? patrisio : 33;
      }
      ;
      if (!bbs.joystick) {
        $("#joystick_checked").val(true);
        $("#joystick_color").val("red");
        $("#joystick_mode").val("dynamic");
        $("#joystick_position").val("L");
        $("#joystick_size").val(100);
        $("#joystick_pxy").val(100);
      } else {
        $("#joystick_checked").prop("checked", bbs.joystick.checked);
        $("#joystick_color").val(bbs.joystick.color);
        $("#joystick_mode").val(bbs.joystick.mode);
        $("#joystick_position").val(bbs.joystick.positionMode);
        $("#joystick_size").val(bbs.joystick.size);
        $("#joystick_pxy").val(bbs.joystick.pxy);
      }
    });
  });
};
var setPropertyManager = function (damianna) {
  if (bbs.PropertyManager) {
    if (bbs.PropertyManager.lj) {
      damianna.skinId = bbs.PropertyManager.lj;
    }
    ;
    if (bbs.PropertyManager.mj) {
      damianna.eyesId = bbs.PropertyManager.mj;
    }
    ;
    if (bbs.PropertyManager.nj) {
      damianna.mouthId = bbs.PropertyManager.nj;
    }
    ;
    if (bbs.PropertyManager.pj) {
      damianna.glassesId = bbs.PropertyManager.pj;
    }
    ;
    if (bbs.PropertyManager.oj) {
      damianna.hatId = bbs.PropertyManager.oj;
    }
  }
};
const register = async function (anetra, chereen) {
  anetra.bbs = bbs;
  $("#mm-params-nickname").prop("maxlength", 32);
  let isable = await fetch(URLSERV_WORMWORLD + "/register", {headers: {"Content-Type": "application/json", "x-access-token": bbs.tk}, method: "POST", body: JSON.stringify(anetra)}).then(async function (emilyn) {
    return await emilyn.json();
  }).catch(function () {
    $(".description-text").html("Problema de conexÃ£o.");
  });
  if (!isable) {
    isable = {};
    isable.tk = 1;
  }
  ;
  bbs.tk = isable.tk;
  anetra.propertyList = isable.propertyList;
  var skins = anetra.propertyList
  chereen(anetra);
  loadBase1Fn(isable);
  _wwc.Zp = _anApp.dh.Zp;
  _anApp.dh.Dq = function (delayni, kohin) {
    let lad = _anApp.dh;
    lad.mq = new WebSocket(delayni);
    loadJoy();
    luaDeCristal = _wwc.ismobile ? 1.15 : 1;
    bbs.start = new Date;
    lad.mq.binaryType = "arraybuffer";
    bbs.con = delayni;
    auxlist = {};
    $W.setIntervalRun = setInterval(function () {
      $W.ps3();
    }, 19);
    lad.mq.onopen = function () {
      _wwc.fnSetCounts("open");
      kohin();
    };
    lad.mq.onclose = function () {
      _wwc.fnSetCounts("close");
      clearInterval($W.setIntervalRun);
      $W.loadBg = false;
    };
    lad.mq.onerror = function (piere) {
      removeJoy();
      lad.mq.close();
      clearInterval($W.setIntervalRun);
      $W.loadBg = false;
    };
    lad.mq.onmessage = function (dharius) {
      lad.Kp.Ph(dharius.data);
    };
  };
  _anApp.dh.Kp.Yh = function (jahron, darlo) {
    removeJoy();
    this.dh.Oi();
  };
  _anApp.og.af.ng.Ug.Uf = function (nattaly) {
    var clidy = function () {
      return $W.$F.M($W.POGL.Sprite, function () {
        $W.POGL.Sprite.call(this), this.sh = 0;
      });
    }();
    for (var palwasha in this.rh) {
      null != nattaly[palwasha] && nattaly[palwasha].hd || ($W.$F.U(this.rh[palwasha]), delete this.rh[palwasha]);
    }
    ;
    var chrisina = 0;
    var bohumil = 1;
    if (bbs.display.custom) {
      bohumil = window.innerWidth;
    }
    ;
    for (var jaleal in nattaly) {
      var waneda = nattaly[jaleal];
      if (waneda.hd) {
        var marken = this.rh[jaleal];
        if (!marken) {
          var kyrstal = _anApp.Lc.Ub().pb(waneda.nd).ub;
          marken = new clidy, marken.texture = kyrstal.Ea(), marken.width = 40, marken.height = 40, this.rh[jaleal] = marken, this.addChild(marken);
        }
        ;
        w2c2020.setPtc(this, jaleal, waneda.od), marken.sh = waneda.od, marken.position.x = chrisina + (bbs.display.custom ? bbs.display.clock.x * bohumil : 0), marken.position.y = bbs.display.custom ? bbs.display.clock.y : marken.position.y, chrisina += 40;
      }
    }
  };
  _anApp.og.af.ng.Tg.addChild(w2c2020.clock);
  _anApp.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
  _anApp.og.af.ng.Tg.addChild(w2c2020.containerHstop);
  w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0;
  _anApp.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
  w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
  _anApp.og.af.ng.Tg.addChild(w2c2020.labelRoom);
  w2c2020.ptc = {};
  const daleah = [40, 40, 40, 120, 40, 20, 40];
  for (let thurgood = 0; thurgood < daleah.length; thurgood++) {
    let dominie = "clock_ad" + thurgood;
    w2c2020.ptc[dominie] = new PIXI.Text(daleah[thurgood], w2c2020.fontStyle["tfc" + thurgood]);
    w2c2020.ptc[dominie].y = 61;
  }
  ;
  w2c2020.setPtc = function (angenette, mikayla, eevee) {
    let urban = daleah[mikayla] - parseInt((0.99 == eevee ? 1 : eevee) * daleah[mikayla] / 1);
    let kuol = "clock_ad" + mikayla;
    angenette.rh[mikayla].addChild(w2c2020.ptc[kuol]);
    if (w2c2020.ptc[kuol]) {
      w2c2020.ptc[kuol].x = urban >= 100 ? 11 : urban >= 10 ? 18 : 26;
      w2c2020.ptc[kuol].text = urban;
    }
  };
  let javanta = _anApp.og.af.ng.Eb;
  mbf.onmovepoint = haron => {
    if (haron.pointerType === "touch" && !haron.isPrimary) {
      return;
    }
    ;
    void 0 !== haron.clientX ? _anApp.og.af.Bn = Math.atan2(haron.clientY - 0.5 * javanta.offsetHeight, haron.clientX - 0.5 * javanta.offsetWidth) : _anApp.og.af.Bn = Math.atan2(haron.pageY - 0.5 * javanta.offsetHeight, haron.pageX - 0.5 * javanta.offsetWidth);
  };
  mbf.onRun = valree => {
    if (valree && valree.pointerType === "touch") {
      return;
    }
    ;
    _anApp.og.af.An = true;
  };
  mbf.onStop = concepcion => {
    if (concepcion && concepcion.pointerType === "touch") {
      return;
    }
    ;
    _anApp.og.af.An = false;
  };
  javanta.addEventListener("pointermove", mbf.onmovepoint, true);
  javanta.addEventListener("pointerdown", mbf.onRun, true);
  javanta.addEventListener("pointerup", mbf.onStop, true);
  if (_wwc.ismobile) {
    javanta.addEventListener("touchstart", function (arieya) {
      (arieya = arieya || window.event) && (_anApp.og.af.An = arieya.touches.length >= 2), arieya.preventDefault();
    }, true);
    javanta.addEventListener("touchend", function (zenaida) {
      (zenaida = zenaida || window.event) && (_anApp.og.af.An = zenaida.touches.length >= 2);
    }, true);
  }
  ;
  window.addEventListener("keydown", autoFn, false);
};
const removeJoy = function () {
  if (joystick) {
    $("#wwc-mobile-box").remove();
    joystick.destroy();
  }
};
const loadJoy = function () {
  try {
    const jaselin = function () {
      joystick.on("start end", function (latinya, jillmarie) {}).on("move", function (chavie, kelan) {
        let dundre = kelan.angle.radian <= Math.PI ? -1 * kelan.angle.radian : Math.PI - (kelan.angle.radian - Math.PI);
        _anApp.og.af.Bn = dundre;
      });
    };
    const aryes = function () {
      if (joystick) {
        joystick.destroy();
      }
      ;
      joystick = nipplejs.create(bbs.joystick);
      jaselin();
    };
    if (_wwc.ismobile && bbs.joystick.checked) {
      if (bbs.activeZoomMobile) {
        $("body").append(`${'\r\n      <div id="wwc-mobile-box">\r\n      <style>\r\n        #wwc-mobile-box{\r\n          position: fixed;\r\n          z-index: 1000;\r\n          width: 100%;\r\n          top: 10px;\r\n        }\r\n        #wwc-mobile-buttons {\r\n          position: relative;\r\n          margin: 0 auto;\r\n          width: 160px;\r\n          display: flex;\r\n          flex-wrap: nowrap;\r\n          justify-content: space-between;\r\n          align-items: center;\r\n        }\r\n        #wwc-mobile-buttons > div {\r\n          background-color: #000;\r\n          color: #FFF;\r\n          border: 1px solid #FFF;\r\n          border-radius: 50px;\r\n          width: 36px;\r\n          height: 36px;\r\n          font-weight: bold;\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n        }\r\n      </style>\r\n      <div id="wwc-mobile-buttons"\r\n      style="">\r\n      <div onclick="mbf.mbf'}${mbfconst}${'4()"> R </div>\r\n      <div onclick="mbf.mbf'}${mbfconst}${'3()"> A </div>\r\n      <div onclick="mbf.mbf'}${mbfconst}${'2()"> - </div>\r\n      <div onclick="mbf.mbf'}${mbfconst}${'1()"> + </div>\r\n      </div>\r\n      </div>'}`);
      }
      ;
      aryes();
    }
  } catch (e) {
    console.error(e);
  }
};
var custom_wormworld_wear = localStorage.getItem("custom_wormworld_wear");
var custom_wormworld_skin = localStorage.getItem("custom_wormworld_skin");
var custom_wormworld_badLang = localStorage.getItem("custom_wormworld_badLang");
var custom_wormworld_background = localStorage.getItem("custom_wormworld_background");
var defalt_wormworld_badLang = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
if (custom_wormworld_badLang) {
  defalt_wormworld_badLang = defalt_wormworld_badLang.concat(JSON.parse(custom_wormworld_badLang));
}
;
var badLanguageRegEx = (defalt_wormworld_badLang || []).join("|");
const wwc_i18nFn = function (inola) {
  inola = inola.replace(new RegExp(badLanguageRegEx, "gim"), ".");
  inola = inola.replace(/\uFDFD/g, "");
  return inola;
};
_wwc.customConfig = function (somia) {
  let argelia = function (armad, tamani) {
    var danyea = new Blob([armad]);
    tamani.Xd = window.URL.createObjectURL(danyea);
  };
  if (custom_wormworld_wear) {
    custom_wormworld_wear = JSON.parse(custom_wormworld_wear);
    if (custom_wormworld_wear.wear) {
      for (let p in custom_wormworld_wear.wear.textureDict) {
        somia.textureDict[p] = {};
        somia.textureDict[p].h1 = true;
        somia.textureDict[p].h3 = true;
        somia.textureDict[p].re1ativePath = custom_wormworld_wear.wear.textureDict[p].file;
      }
      ;
      for (let p in custom_wormworld_wear.wear.regionDict) {
        somia.regionDict[p] = custom_wormworld_wear.wear.regionDict[p];
        let yordanos = somia.regionDict[p];
        somia[yordanos.list][yordanos.obj.id.toString()] = yordanos.obj;
        somia[yordanos.listVariant].push([yordanos.obj.id.toString()]);
      }
    }
  }
  ;
  if (custom_wormworld_skin) {
    custom_wormworld_skin = JSON.parse(custom_wormworld_skin);
    if (custom_wormworld_skin.version_skin) {
      for (let p in custom_wormworld_skin.textureDict) {
        somia.textureDict[p] = custom_wormworld_skin.textureDict[p];
        somia.textureDict[p].h1 = true;
        somia.textureDict[p].h4 = true;
        somia.textureDict[p].re1ativePath = custom_wormworld_skin.textureDict[p].file;
      }
      ;
      for (let p in custom_wormworld_skin.regionDict) {
        somia.regionDict[p] = custom_wormworld_skin.regionDict[p];
      }
      ;
      let kadesia = custom_wormworld_skin.id;
      custom_wormworld_skin.id = kadesia;
      somia.skinGroupArrayDict.push({id: "custom", name: {en: "Custom"}, list: [kadesia.toString()]});
      somia.skinArrayDict.push(custom_wormworld_skin);
    } else {
      let shanonn = custom_wormworld_skin.skin.id;
      custom_wormworld_skin.skin.id = shanonn.toString();
      for (let p in custom_wormworld_skin.textureDict) {
        somia.textureDict[p] = custom_wormworld_skin.textureDict[p];
        somia.textureDict[p].re1ativePath = custom_wormworld_skin.textureDict[p].file;
        somia.textureDict[p].h1 = true;
        somia.textureDict[p].h4 = true;
      }
      ;
      for (let p in custom_wormworld_skin.regionDict) {
        somia.regionDict[p] = custom_wormworld_skin.regionDict[p];
      }
      ;
      somia.skinGroupArrayDict.push({id: "custom", name: {en: "Custom"}, list: [shanonn]});
      somia.skinArrayDict.push(custom_wormworld_skin.skin);
    }
  }
};
document.getElementById("btnFullScreen").addEventListener("click", function () {
  let natelie = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
  if (natelie && !_wwc.fullscreen) {
    try {
      _wwc.fullscreen = true;
      natelie.call(document.documentElement);
    } catch (e) {}
  } else {
    _wwc.fullscreen = false;
    document.exitFullscreen();
  }
});
function mcheck() {
  let euro = false;
  (function (elbony) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(elbony) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(elbony.substr(0, 4))) {
      euro = true;
    }
  }(navigator.userAgent || navigator.vendor || window.opera));
  return euro;
}
const w2c2020 = {fontStyle: {amarelo: new PIXI.TextStyle({align: "center", fill: "#FFD500", fontSize: 10, lineJoin: "round", whiteSpace: "normal", wordWrap: true, fontWeight: "bold"}), branco: new PIXI.TextStyle({align: "center", fill: "#fff", fontSize: 10, lineJoin: "round", whiteSpace: "normal", wordWrap: true, fontWeight: "bold"}), hsBranco: new PIXI.TextStyle({align: "center", fill: "#fff", fontSize: 9, lineJoin: "round", whiteSpace: "normal", wordWrap: true, fontWeight: "bold"}), hsBrancoRight: new PIXI.TextStyle({align: "center", fill: "#fff", fontSize: 9, lineJoin: "round", whiteSpace: "normal", wordWrap: true, fontWeight: "bold", align: "right"}), brancoXzoom: new PIXI.TextStyle({align: "center", fill: "#fff", fontSize: 12, lineJoin: "round", whiteSpace: "normal", wordWrap: true, fontWeight: "bold"})}};
const timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let index = 0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  w2c2020.fontStyle["tfc" + index] = new PIXI.TextStyle({align: "center", fill: color, fontSize: 25, lineJoin: "round", whiteSpace: "normal", wordWrap: true, fontWeight: "bold"});
}
;
w2c2020.zoom = new PIXI.Text("x1", w2c2020.fontStyle.brancoXzoom);
w2c2020.zoom.x = 82;
w2c2020.zoom.y = 105;
w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);
w2c2020.label_hs.x = 15;
w2c2020.label_hs.y = 107;
w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
w2c2020.hs.x = 20;
w2c2020.hs.y = 119;
w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
w2c2020.hsTotal.x = 20;
w2c2020.hsTotal.y = 132;
w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.amarelo);
w2c2020.label_kill.x = 50;
w2c2020.label_kill.y = 107;
w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
w2c2020.kill.x = 60;
w2c2020.kill.y = 120;
w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
w2c2020.killTotal.x = 60;
w2c2020.killTotal.y = 133;
w2c2020.clock = PIXI.Sprite.from(URL_CDN + "/images/clock.png");
w2c2020.clock.width = 100;
w2c2020.clock.height = 100;
w2c2020.clock.x = -50;
w2c2020.clock.y = -50;
w2c2020.containerHsRec = new PIXI.Container;
w2c2020.containerHsRec.x = -55;
w2c2020.containerHsRec.y = 195;
w2c2020.containerHstop = new PIXI.Container;
w2c2020.containerHstop.x = -55;
w2c2020.containerHstop.y = 95;
w2c2020.containerHsIndex = new PIXI.Container;
w2c2020.containerHsNames = new PIXI.Container;
w2c2020.containerHsValue = new PIXI.Container;
const updateTopRec = function (marcusanthony) {};
w2c2020.top1rec = "🥇";
w2c2020.top2rec = "🥈";
w2c2020.top3rec = "🥉";
w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
w2c2020.titleRec.y = -5;
for (let index = 0; index < 3; index++) {
  let refe = index + 1;
  let t0 = new PIXI.Text(w2c2020["top" + refe + "rec"], w2c2020.fontStyle.hsBrancoRight);
  t0.x = index >= 9 ? -5 : 0;
  t0.y = 13 * refe;
  w2c2020.containerHsRec.addChild(t0);
  let t1 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
  t1.x = 15;
  t1.y = 13 * refe;
  w2c2020.containerHsRec.addChild(t1);
  let t2 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
  t2.x = 100;
  t2.y = 13 * refe;
  w2c2020.containerHsRec.addChild(t2);
}
;
w2c2020.containerHsRec.addChild(w2c2020.titleRec);
const qtdeTop = 6;
const updateTop10Hs = function (dalphus, sonder) {
  for (let camario = 0; camario < 3; camario++) {
    if (w2c2020.containerHsRec.children[camario]) {
      w2c2020.containerHsRec.children[camario * 3 + 1].text = sonder && sonder[camario] ? sonder[camario].nickname : "--";
    }
    ;
    if (w2c2020.containerHsRec.children[camario]) {
      w2c2020.containerHsRec.children[camario * 3 + 2].text = sonder && sonder[camario] ? sonder[camario].score : "--";
    }
  }
  ;
  for (let loice = 0; loice < qtdeTop; loice++) {
    let juliane = "--";
    let antoniyo = "--";
    if (dalphus && dalphus[loice]) {
      juliane = dalphus[loice].nickname ? dalphus[loice].nickname.substring(0, 14) : "--";
      antoniyo = parseInt(dalphus[loice].score || 0);
    }
    ;
    if (w2c2020.containerHsNames.children[loice]) {
      w2c2020.containerHsNames.children[loice].text = juliane;
    }
    ;
    if (w2c2020.containerHsValue.children[loice]) {
      w2c2020.containerHsValue.children[loice].text = antoniyo;
    }
  }
};
w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
for (let index = 0; index < qtdeTop; index++) {
  let t0 = new PIXI.Text(index + 1, w2c2020.fontStyle.hsBranco);
  t0.x = index >= 9 ? -5 : 0;
  t0.y = 13 * (index + 1);
  w2c2020.containerHsIndex.addChild(t0);
  let t1 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
  t1.x = 10;
  t1.y = 13 * (index + 1);
  w2c2020.containerHsNames.addChild(t1);
  let t2 = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
  t2.x = 100;
  t2.y = 13 * (index + 1);
  w2c2020.containerHsValue.addChild(t2);
}
;
w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
w2c2020.containerCountInfo = new PIXI.Container;
w2c2020.containerCountInfo.x = -45;
w2c2020.containerCountInfo.y = -52;
w2c2020.containerCountInfo.addChild(w2c2020.zoom);
w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
w2c2020.containerCountInfo.addChild(w2c2020.hs);
w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
w2c2020.containerCountInfo.addChild(w2c2020.kill);
w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
w2c2020.labelRoom = new PIXI.Text("WWC", w2c2020.fontStyle.amarelo);
w2c2020.labelRoom.x = -50;
w2c2020.labelRoom.y = -56;
w2c2020.addRoom = function (alyssya) {
  w2c2020.labelRoom.text = alyssya || "WWC";
};
window.addEventListener("keydown", function (d) {
  if (d.key === "0" && bbs.showRechs) {
    w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
  }
  ;
  if (d.key === "9" && bbs.showTophs) {
    w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
  }
});
var _anApp = {Lc: {Gb: {}}};
var $W = {pm: {}, ps: 0, ps2: function (kandy, ramiel, othel) {
  if (true || $W.ps > 0 && $W.ps < 16) {
    var rutherford = othel ? 128 : 0, autiana = $W.$F.N(ramiel) / $W.$V.F * 128 & 127, deshawnna = 255 & (rutherford | autiana);
    if (kandy.nq !== deshawnna) {
      var jailin = new ArrayBuffer(1);
      new DataView(jailin).setInt8(0, deshawnna), kandy.Eq(jailin), kandy.nq = deshawnna;
    }
  } else {
    kandy.xq(ramiel, othel);
  }
}, ps3: function () {
  _anApp.dh.xq(_anApp.og.af.Gn(), _anApp.og.af.Hn());
}, setIntervalRun: null, loadBg: false, LG: function (joyden, olivett, tomara) {
  joyden.Ll("gg", tomara.credential, null);
}, Lg: function (yatana) {
  _anApp.xe._g = $W.bgg();
  return _anApp.xe._g.width > 999 ? new yatana.WMGBS1 : new yatana.WMGBS2;
}};
$W.Vd = function (jamiya, mariajose) {
  _wwc.customConfig(jamiya);
  var almarosa = this;
  function sakile(atul) {
    var raylea = mariajose.Id.Ld;
    almarosa.Rd(raylea, mariajose.Od.bc(raylea).lc(atul));
  }
  if (this.Fd) {
    return void this.Pd();
  }
  ;
  var kirsy = [], aileah = [], madinah = 0;
  const rosselyn = new PIXI.Loader;
  for (var jaquarious in jamiya.textureDict) {
    if (jamiya.textureDict.hasOwnProperty(jaquarious)) {
      var wentz = jamiya.textureDict[jaquarious];
      var tyquesha = wentz.re1ativePath || wentz.relativePath;
      var leveta = wentz.fileSize || 100;
      var p = wentz.sha256 || null;
      var delsa = new mariajose.Wd(jaquarious, tyquesha, leveta, p);
      delsa.h1 = wentz.h1;
      delsa.h4 = wentz.h4;
      delsa.skinEvo = wentz.skinEvo;
      delsa.lines = wentz.lines;
      delsa.speed = wentz.speed;
      kirsy.push(delsa);
      rosselyn.add(jaquarious, tyquesha);
    }
  }
  ;
  rosselyn.onProgress.add((zene, medeline) => {
    sakile(zene.progress / 100);
  });
  rosselyn.load((eliannys, vesna) => {
    kirsy.forEach(torin => {
      torin.resource = vesna[torin.ae];
    });
    almarosa.$d(jamiya, kirsy, mariajose);
  });
  return;
};
$W.Zd = function (ewalt, rueger, alysandra, domini) {
  $.ajax({type: "GET", url: ewalt._d, xhrFields: {responseType: "arraybuffer", onprogress: function (aprell) {
    aprell.lengthComputable && domini(aprell.loaded / aprell.total);
  }}}).fail(function () {
    rueger(new Error);
  }).done(function (bardo) {
    console.log(bardo)
    alysandra(bardo);
  });
};
$W.$d = function (dillian, glada, daryana) {
  function rosezina(zahaira) {
    var leisa = daryana.Id.Md;
    ruman.Rd(leisa, daryana.Od.bc(leisa).lc(zahaira));
  }
  var ruman = this;
  if (this.Fd) {
    return void this.Pd();
  }
  ;
  var tkaia, kloeigh, chinelo = {}, kamree = function () {
    for (var _0x420fxf = 0; joniqua < glada.length; joniqua++) {
      try {
        window.URL.revokeObjectURL(glada[joniqua].Xd);
      } catch (joniqua) {}
    }
    ;
    ruman.Sd(new Error);
  }, mytien = function () {
    let tyquane = p == 5 ? 0 : p;
    rosezina(tyquane / 4), chinelo[tkaia.ae] = new $W.$C.be(tkaia.Xd, kloeigh), arilee();
  }, arilee = function () {
    try {
      if (p < glada.length) {
        tkaia = glada[p];
        p++;
        chinelo[tkaia.ae] = new $W.$C.be(tkaia.resource.texture, tkaia.resource.texture.baseTexture);
        arilee();
        return;
      }
      ;
      return ruman.ce(dillian, chinelo);
    } catch (error) {
      console.log(error);
    }
  }, p = 0;
  arilee();
};
$W.p = function (p, foye) {
  p = p.split("|");
  $W.pm[p[0]] = {p: p[1], i: foye};
};
$W.ae = function (tyffanie, tavis, corvus) {
  let hilah = corvus.dh.Fh;
  const tyieshia = /([0-9A-Z]{3})W([0-9A-Z]{2})([0-9A-Z]{2})([0-9A-Z]{2})([0-9A-Z]{2})/;
  for (let gurtrue in hilah) {
    const tamio = hilah[gurtrue].Eh.ma.match(tyieshia);
    if (tamio && hilah[gurtrue].Eh.HhV !== 1) {
      if (!auxlist[gurtrue] || auxlist[gurtrue] && auxlist[gurtrue] != hilah[gurtrue].Eh.ma) {
        auxlist[gurtrue] = hilah[gurtrue].Eh.ma;
        hilah[gurtrue].Eh.HhV = 1;
        if (tamio[1] !== "000") {
          hilah[gurtrue].Eh.Hh = parseInt(_wwc.skinMap[tamio[1]]);
        }
        ;
        if (tamio[2] !== "00") {
          hilah[gurtrue].Eh.ni = parseInt(_wwc.wearMap[tamio[2]]);
        }
        ;
        if (tamio[3] !== "00") {
          hilah[gurtrue].Eh.oi = parseInt(_wwc.wearMap[tamio[3]]);
        }
        ;
        if (tamio[4] !== "00") {
          hilah[gurtrue].Eh.pi = parseInt(_wwc.wearMap[tamio[4]]);
        }
        ;
        if (tamio[5] !== "00") {
          hilah[gurtrue].Eh.qi = parseInt(_wwc.wearMap[tamio[5]]);
        }
      }
    }
    ;
    if (hilah[gurtrue].Eh.maV !== 1) {
      hilah[gurtrue].Eh.maV = 1;
      hilah[gurtrue].Eh.ma = wwc_i18nFn(hilah[gurtrue].Eh.ma);
    }
  }
  ;
  if (_anApp.dh.ch.Eh.ae === tavis.ae) {
    let kasiah = Object.keys($W.pm);
    kasiah.forEach(feliks => {
      tavis[feliks] = bbs.PropertyManager[$W.pm[feliks].p];
      tyffanie.setInt16($W.pm[feliks].i, tavis[feliks]);
    });
  }
};
$W.Xp = function (tamisha, jenson, nahzir, brax, nikiea, yosemite, nasear) {
  if (!_wwc.skinMap) {
    _wwc.skinMap = _anApp.Lc.Xb().skinMap;
  }
  ;
  if (!_wwc.wearMap) {
    _wwc.wearMap = _anApp.Lc.Xb().wearMap;
  }
  ;
  let sefa = _wwc.skinMap[nahzir] || "000";
  let mayland = _wwc.wearMap[brax] || "00";
  let stephaney = _wwc.wearMap[nikiea] || "00";
  let parick = _wwc.wearMap[yosemite] || "00";
  let datrell = _wwc.wearMap[nasear] || "00";
  let binyomin = 20;
  let thersa = sefa + "W" + mayland + stephaney + parick + datrell;
  let josmel = jenson.substr(0, binyomin).trim().padEnd(binyomin, ".") + thersa;
  return josmel;
};
$W.bgg = function (sriram) {
  const korinna = PIXI.BaseTexture.from(sriram || bbs.background || "/images/bg-pattern-pow2-ARENA.png");
  korinna.wrapMode = korinna.width > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
  const alanmichael = new PIXI.Texture(korinna);
  return alanmichael;
};
$W.join = function (jakauri) {
  _wwcio.joinRoom(jakauri);
};
$W.genereteTexture = function (cyron) {
  const suze = 128;
  const lynzey = 9;
  try {
    function nanelle() {
      const tywaun = [];
      for (let ryhan = 0; ryhan < cyron.lines; ryhan++) {
        lineContainer = [];
        for (let zoree = 0; zoree < lynzey; zoree++) {
          try {
            const kelmer = PIXI.Texture.from(cyron._d, {x: zoree * suze, y: ryhan * suze, width: suze, height: suze});
            lineContainer.push(kelmer);
          } catch (error) {
            console.log(ryhan, zoree);
            console.log(error);
            return;
          }
        }
        ;
        tywaun.push(lineContainer);
      }
      ;
      return tywaun;
    }
    return nanelle();
  } catch (error) {
    return [];
  }
};
