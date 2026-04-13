#!/usr/bin/env python3
"""Generate a professional one-page PDF career summary for Zainab Ghadiyali."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import ParagraphStyle

OUTPUT_PATH = "/Users/azizsaif/Library/Mobile Documents/com~apple~CloudDocs/Claude websites 2026/zainab-ghadiyali-profile/Zainab-Ghadiyali-Career-Summary.pdf"

# Colors
DARK = HexColor("#1a1a2e")
ACCENT = HexColor("#c0354d")
ACCENT_LIGHT = HexColor("#e94560")
GOLD = HexColor("#d4873e")
TEAL = HexColor("#1a8a7e")
GRAY = HexColor("#555566")
LIGHT_BG = HexColor("#f8f7f5")
WHITE = HexColor("#ffffff")
TEXT = HexColor("#2a2a3a")

# Styles
style_title = ParagraphStyle("Title", fontName="Helvetica-Bold", fontSize=16, textColor=DARK, alignment=TA_CENTER, spaceAfter=2)
style_subtitle = ParagraphStyle("Subtitle", fontName="Helvetica", fontSize=8.5, textColor=GRAY, alignment=TA_CENTER, spaceAfter=6)
style_section = ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=9, textColor=ACCENT, spaceAfter=3, spaceBefore=6)
style_body = ParagraphStyle("Body", fontName="Helvetica", fontSize=7.2, textColor=TEXT, leading=9.5, alignment=TA_LEFT)
style_body_bold = ParagraphStyle("BodyBold", fontName="Helvetica-Bold", fontSize=7.2, textColor=TEXT, leading=9.5)
style_quote = ParagraphStyle("Quote", fontName="Helvetica-Oblique", fontSize=7, textColor=ACCENT, leading=9, leftIndent=8, rightIndent=8)
style_small = ParagraphStyle("Small", fontName="Helvetica", fontSize=6.5, textColor=GRAY, leading=8.5)
style_timeline_title = ParagraphStyle("TimelineTitle", fontName="Helvetica-Bold", fontSize=7.2, textColor=DARK, leading=9)
style_timeline_body = ParagraphStyle("TimelineBody", fontName="Helvetica", fontSize=6.8, textColor=GRAY, leading=8.5)

def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        topMargin=0.4*inch,
        bottomMargin=0.3*inch,
        leftMargin=0.5*inch,
        rightMargin=0.5*inch,
    )
    story = []
    w = doc.width

    # Title
    story.append(Paragraph("ZAINAB GHADIYALI", style_title))
    story.append(Paragraph(
        "Tech Leader  |  Founder & CEO, Eat Cook Joy  |  Co-founder, Wogrammer  |  Ex-Airbnb, Facebook, Canva",
        style_subtitle
    ))
    story.append(Paragraph(
        "linkedin.com/in/zainabg  |  eatcookjoy.com  |  Foreign Policy Top 100 Global Thinkers 2015",
        ParagraphStyle("Links", fontName="Helvetica", fontSize=7, textColor=TEAL, alignment=TA_CENTER, spaceAfter=4)
    ))

    # Divider
    story.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=6, spaceBefore=2))

    # --- Two column layout using Table ---
    left_col = []
    right_col = []

    # LEFT COLUMN: Career Timeline
    left_col.append(Paragraph('<font color="#c0354d"><b>CAREER TIMELINE</b></font>', style_section))

    timeline = [
        ("ORIGIN", "Left Mumbai at 19 with $107. B.Sc. Chemistry, Winthrop University, SC."),
        ("GLOBAL RESEARCH", "DAAD fellowship in Berlin (acupuncture research). FIMRC in Peru/Nicaragua building pediatric care models."),
        ("2009 - PIVOT TO TECH", "200+ job rejections during recession. Discovered tech at 25 via Facebook hackathon (went for free food). Won hackathon, earned engineering interview."),
        ("FACEBOOK", "Production Engineer to Tech Lead. Built products for 1.5B+ users: Poke, Ads, Pages, Blood Donations."),
        ("2014 - WOGRAMMER", "Co-founded with Erin Summers. Featured 200+ women engineers. Named FP Top 100 Global Thinkers 2015. Acquired by AnitaB.org. Reached 4M+ people."),
        ("AIRBNB & CANVA", "Product Lead at both companies. Built product infrastructure teams. Mastered influence without authority."),
        ("CURRENT", "Founded Eat Cook Joy (AI personal chef platform, $7/serving, $1M ARR track). Building Stackbirds (democratizing AI agents). Survived ransomware attack and rebuilt within 2 weeks."),
    ]

    for label, desc in timeline:
        left_col.append(Paragraph(
            f'<font color="#d4873e"><b>{label}</b></font>',
            ParagraphStyle("TLabel", fontName="Helvetica-Bold", fontSize=6.5, textColor=GOLD, leading=8, spaceBefore=3)
        ))
        left_col.append(Paragraph(desc, style_timeline_body))

    # Key Quotes
    left_col.append(Spacer(1, 6))
    left_col.append(Paragraph('<font color="#c0354d"><b>KEY QUOTES</b></font>', style_section))
    quotes = [
        '"Career ladder thinking puts you in a box"',
        '"Every experience adds a brushstroke to a bigger picture"',
        '"Influence is a life skill -- exercise it more deliberately"',
        '"Bravery requires fear, and I wasn\'t afraid; I was excited"',
    ]
    for q in quotes:
        left_col.append(Paragraph(f'<font color="#c0354d"><i>{q}</i></font>',
            ParagraphStyle("Q", fontName="Helvetica-Oblique", fontSize=6.8, textColor=ACCENT, leading=8.5, leftIndent=4)))

    # RIGHT COLUMN: Philosophy + Lessons
    right_col.append(Paragraph('<font color="#c0354d"><b>CAREER PHILOSOPHY</b></font>', style_section))
    philosophy = [
        ("1. Lean Into Curiosity", "Use curiosity as primary career navigation. At each crossroads: \"What am I excited to learn next?\""),
        ("2. Career as a Painting", "Reject the linear ladder. Embrace interconnected brushstrokes revealing a larger picture over time."),
        ("3. Creative Over Reactive", "Possibility-driven thinking vs fear-driven. Set positive intentions before difficult situations."),
        ("4. Three Decision Questions", "Have I maximized growth here? Does this align with my values? Expand laterally or dive deeper?"),
        ("5. Builders, Not Smushers", "Surround yourself with people who inspire -- the antidote to impostor syndrome."),
        ("6. Influence Without Authority", "Everyone exercises influence. Soft skills (communication, empathy, persuasion) remain irreplaceable."),
    ]
    for title, desc in philosophy:
        right_col.append(Paragraph(
            f'<b>{title}</b>',
            ParagraphStyle("PhilTitle", fontName="Helvetica-Bold", fontSize=7, textColor=DARK, leading=9, spaceBefore=3)
        ))
        right_col.append(Paragraph(desc, style_timeline_body))

    right_col.append(Spacer(1, 6))
    right_col.append(Paragraph('<font color="#c0354d"><b>TRANSFERABLE LESSONS FOR TECH LEADERS</b></font>', style_section))

    lessons = [
        ("<b>Hire for hunger, not checklists.</b> Define 3 most important qualities per role. Look for patterns of risk-taking and follow-through.",),
        ("<b>Amplify strengths in interviews.</b> Don't hide gaps -- minimize hiring risk. Acknowledge shortcomings and show willingness to learn.",),
        ("<b>Side projects accelerate skills.</b> Manage them like a business with scalable processes and automation.",),
        ("<b>Transferable skills matter most.</b> Problem-solving transcends industries. Soft skills create disproportionate impact.",),
        ("<b>Future-proof with soft skills.</b> Creative problem-solving, empathy, communication, influence -- what computers can't replicate.",),
    ]
    for (lesson,) in lessons:
        right_col.append(Paragraph(
            f'<bullet>&bull;</bullet> {lesson}',
            ParagraphStyle("Lesson", fontName="Helvetica", fontSize=6.8, textColor=TEXT, leading=8.5, leftIndent=10, bulletIndent=2, spaceBefore=1.5)
        ))

    # Education
    right_col.append(Spacer(1, 6))
    right_col.append(Paragraph('<font color="#c0354d"><b>EDUCATION</b></font>', style_section))
    right_col.append(Paragraph(
        '<b>M.Sc. Industrial Engineering & Computer Science</b><br/>University of Wisconsin-Madison',
        ParagraphStyle("Edu", fontName="Helvetica", fontSize=6.8, textColor=TEXT, leading=8.5, spaceBefore=2)
    ))
    right_col.append(Paragraph(
        '<b>B.Sc. Chemistry</b><br/>Winthrop University, South Carolina',
        ParagraphStyle("Edu2", fontName="Helvetica", fontSize=6.8, textColor=TEXT, leading=8.5, spaceBefore=2)
    ))

    # Build two-column table
    col_width = w / 2 - 6
    table_data = [[left_col, right_col]]
    col_table = Table(table_data, colWidths=[col_width, col_width])
    col_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (0, 0), 0),
        ('RIGHTPADDING', (0, 0), (0, 0), 6),
        ('LEFTPADDING', (1, 0), (1, 0), 6),
        ('RIGHTPADDING', (1, 0), (1, 0), 0),
        ('LINEAFTER', (0, 0), (0, 0), 0.5, HexColor("#dddddd")),
    ]))
    story.append(col_table)

    # Footer
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.5, color=HexColor("#cccccc"), spaceAfter=4))
    story.append(Paragraph(
        'Sources: First Round Review, Crunchbase News, Voyage San Antonio, Engineering at Meta, Inside Outside Innovation  |  Compiled April 2026',
        ParagraphStyle("Footer", fontName="Helvetica", fontSize=5.5, textColor=GRAY, alignment=TA_CENTER)
    ))

    doc.build(story)
    print(f"PDF saved to: {OUTPUT_PATH}")

if __name__ == "__main__":
    build_pdf()
