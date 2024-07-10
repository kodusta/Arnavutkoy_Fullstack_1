<h1>Hello world</h1>
      <div style={{ width: "100%" }}>
        <h2>Sepetiniz</h2>
        {sepet.map((urun) => (
          <div>
            {urun.urun.productName}-{urun.adet}
            <button
              style={{ color: "green" }}
              onClick={() => sepetguncelle(urun.urun, "arttir")}
            >
              Adet Arttır
            </button>
            <button
              style={{ color: "red" }}
              onClick={() => sepetguncelle(urun.urun, "azalt")}
            >
              Adet Azalt
            </button>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <h2>Kategoriler</h2>
          <ul>
            {kategoriler.map((kategori) => (
              <button onClick={() => kategoridegistir(kategori)}>
                {kategori.id}-{kategori.categoryName}
              </button>
            ))}
          </ul>
        </div>
        <div style={{ width: "40%" }}>
          <h2>Ürünler-{secilikategori}</h2>
          {urunler.map((urun) => (
            <div>
              {urun.categoryId}-{urun.productName}
              <button onClick={() => sepeteekle(urun)}>Sepete Ekle</button>
            </div>
          ))}
        </div>
      </div>