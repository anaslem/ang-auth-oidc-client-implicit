import { Component } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrl: './pdfviewer.component.css'
})
export class PdfviewerComponent {
  title = 'PDF Viewer Example';
  pdfSrc = 'assets/sample.pdf'; // Path to your PDF file

  // For dynamic loading
  loadPdf(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.pdfSrc = URL.createObjectURL(file);
    }
  }
}
