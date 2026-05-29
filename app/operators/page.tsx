import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operators",
  description:
    "63 active VoxHorizon operators across 27 states. Audited stats, no testimonials, plain receipts.",
  alternates: { canonical: "/operators" },
};

export default function OperatorsPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Operators · the network<em>— 63 desks, 27 states</em>
        </div>
        <h1>
          The roster.
          <br />
          <em>Not testimonials.</em> <span className="mut">Receipts.</span>
        </h1>
        <p className="lede">
          Below is every active VoxHorizon operator, with their audited Q3 numbers.{" "}
          <strong>No selected quotes, no curated success stories.</strong> A profile only appears
          here once an operator has crossed thirty signed contracts; before that, the desk is
          calibrating and the numbers don't mean much.
        </p>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
        <div className="vh-strip__cell">
          <div className="k">Network · YTD revenue</div>
          <div className="v">
            <span className="pre">$</span>
            <em>184</em>
            <span className="pre">M</span>
          </div>
          <div className="delta">+22% YoY</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Median op · revenue / yr</div>
          <div className="v">
            <span className="pre">$</span>1.4<span className="pre">M</span>
          </div>
          <div className="delta">+$180K YoY</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Top quartile · revenue / yr</div>
          <div className="v">
            <span className="pre">$</span>
            <em>3.2</em>
            <span className="pre">M</span>
          </div>
          <div className="delta">+$420K YoY</div>
        </div>
      </div>

      {/* ── 01 — OPERATOR CARDS ────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 03 <span>— Operator profiles</span>
          </span>
          <em>Six of sixty-three. Roll the page for more.</em>
        </div>

        <div className="vh-ops-grid">

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Deckworks<span className="z">55410 · MN</span>
              </div>
              <div className="tag">★ TOP DECILE</div>
            </div>
            <p className="vh-op__quote">
              "The phone rings, I drive, I sign. I haven't run a Google ad in fourteen months. My
              wife took the year off."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>41</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$38K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">14mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Halloran &amp; Sons<span className="z">83702 · ID</span>
              </div>
              <div className="tag">★ TOP QUARTILE</div>
            </div>
            <p className="vh-op__quote">
              "Used to spend $4,800/mo on lead aggregators for half the close rate. Cancelled in
              week three."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>34</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$28K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">9mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Sterling Glass<span className="z">49503 · MI</span>
              </div>
              <div className="tag">— STEADY</div>
            </div>
            <p className="vh-op__quote">
              "Window work is brutal in Michigan winters. The leads keep coming because Erin tuned
              the intake to my season."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>28</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$22K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">22mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Birchwood Build<span className="z">05401 · VT</span>
              </div>
              <div className="tag">★ TOP QUARTILE</div>
            </div>
            <p className="vh-op__quote">
              "Three years on aggregators got me twenty signs. Eighteen months on Vox got me
              eighty-one."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>32</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$44K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">18mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Greenway Remodel<span className="z">28207 · NC</span>
              </div>
              <div className="tag">— STEADY</div>
            </div>
            <p className="vh-op__quote">
              "Two of my kept appointments last week were over $60K. That's not a lead — that's a
              customer."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>22</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$48K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">11mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Olafsen Build<span className="z">53703 · WI</span>
              </div>
              <div className="tag">— STEADY</div>
            </div>
            <p className="vh-op__quote">
              "The guarantee is a real thing. They missed me 4 in Q1, worked free for fifteen
              days, hit thirty in twenty-six."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>29</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$31K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">7mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Calder Plumbing<span className="z">97402 · OR</span>
              </div>
              <div className="tag">— NEW · CAL.</div>
            </div>
            <p className="vh-op__quote">
              "Eight kept appointments in week one. I haven't seen volume like this since 2018."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>11</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$19K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">2mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                NH Building Services<span className="z">03110 · NH</span>
              </div>
              <div className="tag">— STEADY</div>
            </div>
            <p className="vh-op__quote">
              "Loft conversions in three different towns this month. Nadia (intake) reads my zone
              better than I do."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>24</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$54K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">13mo</div>
              </div>
            </div>
          </div>

          <div className="vh-op">
            <div className="vh-op__head">
              <div className="id">
                Mitch Roofing<span className="z">67501 · KS</span>
              </div>
              <div className="tag">— NEW · CAL.</div>
            </div>
            <p className="vh-op__quote">
              "Twelve roofs in week eight. The K-rate is the part nobody believes until they see
              it."
            </p>
            <div className="vh-op__stats">
              <div className="s">
                <div className="k">Signed · Q3</div>
                <div className="v">
                  <em>18</em>
                </div>
              </div>
              <div className="s">
                <div className="k">Avg ticket</div>
                <div className="v">$21K</div>
              </div>
              <div className="s">
                <div className="k">Tenure</div>
                <div className="v">3mo</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 02 — NETWORK ROSTER ────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 03 <span>— Network roster · Q3</span>
          </span>
          <em>Audited numbers, alphabetical.</em>
        </div>
        <div className="vh-zip">
          <div className="vh-zip__h">
            <span>Operator · Zip · Trade · Q3 signed · Q3 revenue</span>
            <em>— 18 of 63 shown</em>
          </div>
          <div className="vh-zip__row">
            <span className="z">87505</span>
            <span className="city">Adobe Custom · Santa Fe NM · kitchens</span>
            <span className="ct"><em>26</em> · $1.1M</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">05401</span>
            <span className="city">Birchwood Build · Burlington VT · additions</span>
            <span className="ct"><em>32</em> · $1.4M</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">59715</span>
            <span className="city">Bridger Trades · Bozeman MT · whole house</span>
            <span className="ct"><em>17</em> · $1.7M</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">97402</span>
            <span className="city">Calder Plumbing · Eugene OR · re-pipe</span>
            <span className="ct"><em>11</em> · $208K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">55410</span>
            <span className="city">Deckworks · Minneapolis MN · decks</span>
            <span className="ct"><em>41</em> · $1.6M</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">28207</span>
            <span className="city">Greenway Remodel · Charlotte NC · kitchens</span>
            <span className="ct"><em>22</em> · $1.0M</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">83702</span>
            <span className="city">Halloran &amp; Sons · Boise ID · baths</span>
            <span className="ct"><em>34</em> · $952K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">67501</span>
            <span className="city">Mitch Roofing · Wichita KS · roofs</span>
            <span className="ct"><em>18</em> · $378K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">03110</span>
            <span className="city">NH Building Services · Manchester NH · lofts</span>
            <span className="ct"><em>24</em> · $1.3M</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">53703</span>
            <span className="city">Olafsen Build · Madison WI · sunrooms</span>
            <span className="ct"><em>29</em> · $898K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">14618</span>
            <span className="city">Pittsford Custom · Rochester NY · baths</span>
            <span className="ct"><em>21</em> · $612K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">29401</span>
            <span className="city">Rainsford &amp; Co · Charleston SC · porches</span>
            <span className="ct"><em>19</em> · $740K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">99205</span>
            <span className="city">Riverview Build · Spokane WA · additions</span>
            <span className="ct"><em>16</em> · $704K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">49503</span>
            <span className="city">Sterling Glass · Grand Rapids MI · windows</span>
            <span className="ct"><em>28</em> · $616K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">37205</span>
            <span className="city">Tannehill Carpentry · Nashville TN · whole house</span>
            <span className="ct"><em>20</em> · $1.2M</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">68114</span>
            <span className="city">Three Oaks Build · Omaha NE · kitchens</span>
            <span className="ct"><em>23</em> · $782K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">82001</span>
            <span className="city">Wind River Custom · Cheyenne WY · decks</span>
            <span className="ct"><em>15</em> · $452K</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">78704</span>
            <span className="city">Zilker Build · Austin TX · whole house</span>
            <span className="ct"><em>27</em> · $1.5M</span>
          </div>
        </div>
      </section>

      {/* ── 03 — LIAISON ───────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 03 <span>— Your liaison</span>
          </span>
          <em>One person, on the phone, plain answers.</em>
        </div>
        <div className="vh-grnt">
          <div>
            <div className="vh-grnt__title">
              Erin Kassidy.
              <br />
              <em>Operator liaison.</em>
            </div>
            <p className="vh-grnt__body">
              Erin runs every application call. She'll walk through your zip's current state, your
              trade fit, the projects she thinks you'll see, and the projects we'll have to refuse.
              She has fourteen years in remodel sales — she's been on your side of the kitchen
              table. <strong>No SDRs, no AEs, no warm-up dance.</strong>
            </p>
            <p className="vh-grnt__body">
              She picks up the phone Monday through Thursday, 8am to 5pm Mountain, and answers
              every applicant within 48 hours — including the no's.
            </p>
          </div>
          <div className="vh-term">
            <div>
              <span className="c">{"// erin · operator liaison"}</span>
            </div>
            <div>&nbsp;</div>
            <div>
              &nbsp;&nbsp;name........... <span className="e">Erin Kassidy</span>
            </div>
            <div>
              &nbsp;&nbsp;role........... <span className="e">Operator Liaison</span>
            </div>
            <div>
              &nbsp;&nbsp;tenure......... <span className="e">VH since 2022</span>
            </div>
            <div>
              &nbsp;&nbsp;prior.......... <span className="e">14 yrs remodel sales</span>
            </div>
            <div>&nbsp;</div>
            <div>
              &nbsp;&nbsp;reach.......... <span className="p">erin@voxhorizon.io</span>
            </div>
            <div>
              &nbsp;&nbsp;hours.......... <span className="e">M–Th · 8a–5p MT</span>
            </div>
            <div>
              &nbsp;&nbsp;response....... <span className="e">&lt; 48h, every applicant</span>
              <span className="cursor"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">Apply to join the roster · Q3 closes Sept 30</div>
        <h2>
          Twelve of these desks
          <br />
          opened up this <em>quarter.</em>
        </h2>
        <div className="vh-cta">
          <Link href="/apply" className="p">
            [ Apply my zip ]
          </Link>
          <Link href="/territory" className="g">
            See open zips
          </Link>
        </div>
        <div className="meta">
          <span>63 active operators</span>
          <span>
            <em>12 of 24</em> Q3 slots open
          </span>
        </div>
      </div>
    </>
  );
}
