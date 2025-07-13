---
layout: project
title: Automated Web Scraping for Land Sales Data
description: 'Industry Collaboration: AcreTrader'
img: assets/img/land_auction_web_scraper.webp
importance: 1
related_publications: false
---

<div class="container px-0">
  <div class="row mt-3">
    <div class="col-sm mb-3">
      From August 2025 to May 2025, I worked with my fellow students <a href="https://www.linkedin.com/in/craig-harriman-a965b0256/" rel="external nofollow noopener" target="_blank">Craig Harriman</a> and <a href="https://www.linkedin.com/in/phoebe-miller-4014b5225/" rel="external nofollow noopener" target="_blank">Phoebe Miller</a> to develop an automated web scraper for our industry partner AcreTrader. We completed this project as a final capstone for our data science degrees. We received the following recognitions for our work:
      <ul>
        <li>Our team won <i>Runner-Up for Best Practicum Project</i>.</li>
        <li>I won <i>Best Transfer of Knowledge</i> for my ability to simplify and communicate complex technical details.</li>
        <li>Our project recieved the highest marks from our industry partner and is currently in use by the AcreTrader team.</li>
      </ul>
      Read the full project report <a href="/assets/pdf/acretrader_report.pdf" rel="external nofollow noopener" target="_blank">here</a>.
    </div>
    <div class="col-sm mb-3">
      {% include figure.liquid loading="eager" path="assets/img/land_auction_web_scraper.webp" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
  <div class="row">
    <div class="col-sm mb-3">
      <h4>Background</h4>
      <a href="https://www.acres.com/" rel="external nofollow noopener" target="_blank">Acres.com</a> is a land research platform run by AcreTrader that helps users make informed decisions about buying and selling land. They maintain a database of land sales that they can use for comparisons and modeling, but this database previously relied manually collecting sales from hundreds of online auction websites. That process was slow and resource intensive, so the AcreTrader team wanted a new automated system.
    </div>
    <div class="col-sm mb-3">
      <h4>Objective</h4>
      Develop an automated web scraping system that
      <ul>
        <li>extracts relevant land sale data</li>
        <li>targets high-volume sources</li>
        <li>flags inconsistencies</li>
        <li>has clear documentation</li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-sm mb-3">
      <h4>Key Figure</h4>
      {% include figure.liquid loading="eager" path="assets/img/acretrader_figure.png" title="Figure highlighting the increased performance of the automated scraping system over the current manual process." class="img-fluid z-depth-1" caption="Figure from our final presentation highlighting the increased efficiency of the system. Note that it says \"at least\" because, depending on the rate of relevance for partial scrapes, our method can collect production-ready land sales up to 60x faster." %}
    </div>
    <div class="col-sm mb-3">
      <h4>Accomplishments</h4>
        <ol>
          <li>Created a web scraper with Selenium and BeautifulSoup that covers all high-volume sources and <b>collects production-ready land sales 9x faster than the current process</b>.</li>
          <li>Developed a zero-shot model using a quantized LLM that <b>predicts the probability that land sales are relevant</b> to the AcreTrader business. The model achieves 83% accuracy when treated as binary classification and has an average error of 0.1 for misclassifications. </li>
          <li>Designed a comprehensive scraping dashboard that <b>visualizes key performance metrics, identifies missing data patterns, and provides detailed documentation</b> of all components of the web scraping system.</li>
        </ol>
      </div>
  </div>
  <div class="row">
      <div class="col-sm mb-3">
        <h4>Learning & Development</h4>
          <ul>
            <li><b>Gained experience developing object-oriented applications for production</b>. I was especially passionate about writing simpler code and more detailed documentation, so our partner could more easily operate, maintain, and improve our tool.</li>
            <li><b>Deepened my understanding of web scraping</b> with technologies like Selenium and BeautifulSoup. Specifically, I learned about simulating browser functions for tasks like taking screenshots and handling dynamically loaded content. </li>
            <li><b>Learned how to optimize LLMs for low-resource systems</b>. This included obvious steps like using smaller models, but I also worked on quantization methods to help reduce memory usage.</li>
          </ul>
      </div>
  </div>
</div>