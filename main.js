var mauSac = 'mauDo';
document.querySelector('#mauDo').onclick = function () {
    document.querySelector('#hinhVe').style.background = 'red';
    mauSac = 'mauDo';
}
document.querySelector('#mauCam').onclick = function () {
    document.querySelector('#hinhVe').style.background = 'orange';
    mauSac = 'mauCam';
}
document.querySelector('#mauLuc').onclick = function () {
    document.querySelector('#hinhVe').style.background = 'green';
    mauSac = 'mauLuc';
}
document.querySelector('#btn').onclick = function () {
    var chieuDai = document.querySelector('#chieuDai').value;
    var chieuRong = document.querySelector('#chieuRong').value;

    var chuVi = ((Number(chieuDai)) + (Number(chieuRong))) * 2;
    var dienTich = (Number(chieuDai)) * (Number(chieuRong));

    document.querySelector('#chuVi').value = chuVi;
    document.querySelector('#chuVi').style.background = 'green';
    document.querySelector('#chuVi').style.color = 'white';
    document.querySelector('#dienTich').value = dienTich;
    document.querySelector('#dienTich').style.background = 'green';
    document.querySelector('#dienTich').style.color = 'white';
    document.querySelector('#hinhVe').style.width = chieuDai + 'px';
    document.querySelector('#hinhVe').style.height = chieuRong + 'px';
    if (mauSac === 'mauDo') {
        document.querySelector('#hinhVe').style.background = 'red';
    }
    else if (mauSac === 'mauCam') {
        document.querySelector('#hinhVe').style.background = 'orange';
    }
    else
        document.querySelector('#hinhVe').style.background = 'green';
}    