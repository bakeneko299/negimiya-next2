// app/components/ActivitySection.tsx
export default function ActivitySection() {
  return (
    <section id="videos" className="videos bg-[var(--section3-bg)] py-16 md:py-20 fade-in">
      <div className="container max-w-[1080px] w-[90%] mx-auto">

        {/* ▼ 統一デザインのタイトル */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-title scramble-text fade-in">
            Activities
          </h1>
          <hr className="section-divider fade-in" />
        </div>

        {/* ▼ 既存の ActivityItem（変更なし） */}
        <ActivityItem
          title="次は宇宙で！スイカゲームぷらねっとプレイ"
          videoId="Zl4i0siXdAs"
          description={
            <>
              満を持してスイカゲームぷらねっとをプレイ！<br />
              「箱じゃないならダブルスイカは余裕！」とイキる葱野だが・・・？<br />
            </>
          }
        />
        <ActivityItem
          title="新たな挑戦！Cairn登山実況"
          videoId="6hpWLeiTAi0"
          description={
            <>
              PEAKよりも現実的。話題の登山ゲーム「Cairn（ケルン）」をプレイ！<br />
              マウント・カミの頂を目指す彼らの生き様に葱野みやは何を感じるか。<br />
            </>
          }
        />

        <ActivityItem
          title="ハロウィン×グミ＝お祭り"
          videoId="iY6u2zJ9X78"
          description={
            <>
              25種類のグミを使ってハロウィンパーティーを開催！<br />
              葱野みやが選んだグミは、見た目も味も個性的で、視聴者を楽しませています。<br />
              <a
                href="https://93gummy.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                日本グミ協会
              </a>
              に所属してはいないものの、彼女のグミ愛は本物です。<br />
              気になったグミはぜひチェックしてみてください。<br />
              <span className="text-sm opacity-80">※2025年10月31日時点の情報です。</span>
            </>
          }
        />

        <ActivityItem
          title="アルピニストとしてのプライド"
          videoId="FJ-lsDIjono"
          description={
            <>
              登山ゲーム「PEAK」をアルピニストとしてのプライドを持って配信しています。<br />
              リュックサックをけり落とさない、弁当箱でギャンブルなど、取れ高のあるプレイスタイルが特徴。<br />
              彼女の悲鳴には、多くの人々がガッツポーズしてしまいます。
            </>
          }
        />

        <ActivityItem
          title="食事を楽しみましょう"
          videoId="z1HCukNoFFE"
          description={
            <>
              葱野みやは特に家系ラーメンが好きで、がっつりした食事を好んでいます。<br />
              期間限定品の食レポ動画も大人気！<br />
              視聴者にとっても参考になる内容が多く、高評価続出です。
            </>
          }
        />

        <ActivityItem
          title="悲鳴はリスナーの栄養"
          videoId="f2vSnWngjJY"
          description={
            <>
              怖がりながらも視聴者を楽しませるために頑張るホラー実況。<br />
              耳から心の栄養を摂取できるのは葱野みやだけ！<br />
              思わず「たすかる」とスパチャしてしまいますね。
            </>
          }
        />

        <ActivityItem
          title="心の葛藤"
          videoId="CH7L6ZQgASc"
          description={
            <>
              活動を続ける中での理想と現実のギャップ、心の葛藤。<br />
              そんなリアルな姿も含めて応援したくなる……<br />
              「伸びろーッ！」
            </>
          }
        />

      </div>
    </section>
  );
}
// ActivityItem は変更なし（そのまま残してください）
function ActivityItem({
  title,
  videoId,
  description,
}: {
  title: string;
  videoId: string;
  description: React.ReactNode;
}) {
  return (
    <div className="video-layout-row mb-[60px] fade-in">
      {/* 左カラム: テキスト */}
      <div className="video-layout-col">
        <h2 className="scramble-text text-2xl md:text-[28px] font-bold text-[var(--accent-alt)] mb-4 md:mb-[18px] leading-[1.3]">
          {title}
        </h2>
        <hr className="border-2 border-[var(--accent-color)] w-[60px] mb-5 md:mb-[20px]" />
        <p className="text-[15px] md:text-[16px] leading-[1.8] text-[var(--text-color)]">
          {description}
        </p>
      </div>
      {/* 右カラム: 動画 */}
      <div className="video-layout-col">
        <div className="youtube-container">
          <iframe
            className="youtube-iframe"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}