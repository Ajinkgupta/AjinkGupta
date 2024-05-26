function diagonalize() {
            // Get matrix elements
            const a11 = parseFloat(document.getElementById('a11').value);
            const a12 = parseFloat(document.getElementById('a12').value);
            const a21 = parseFloat(document.getElementById('a21').value);
            const a22 = parseFloat(document.getElementById('a22').value);

            // Check if any input is NaN
            if (isNaN(a11) || isNaN(a12) || isNaN(a21) || isNaN(a22)) {
                document.getElementById('results').innerHTML = '<p>Please enter valid numbers.</p>';
                document.getElementById('result2x2').innerHTML = '';
                return;
            }

            // Calculate trace, determinant, and discriminant
            const trace = a11 + a22;
            const det = a11 * a22 - a12 * a21;
            const discriminant = trace * trace - 4 * det;

            // Check if discriminant is negative
            if (discriminant < 0) {
                document.getElementById('results').innerHTML = '<p>Matrix cannot be diagonalized (complex eigenvalues).</p>';
                document.getElementById('result2x2').innerHTML = '';
                return;
            }

            // Calculate eigenvalues
            const lambda1 = (trace + Math.sqrt(discriminant)) / 2;
            const lambda2 = (trace - Math.sqrt(discriminant)) / 2;

            // Display diagonal matrix
            document.getElementById('result2x2').innerHTML = '<h2>Diagonal Matrix D:</h2>' +
                `<p>| ${lambda1}  0 |</p>` +
                `<p>| 0  ${lambda2} |</p>`;

            // Display characteristic equation, eigenvalues, and eigenvectors
            document.getElementById('results').innerHTML = '<h2>Characteristic Equation:</h2>' +
                `<p>λ^2 - ${trace}λ + ${det} = 0</p>` +
                '<h2>Eigenvalues:</h2>' +
                `<p>λ₁ = ${lambda1}, λ₂ = ${lambda2}</p>` +
                '<h2>Eigenvectors:</h2>' +
                `<p>v₁ = [${-a12}, ${a11 - lambda1}]</p>` +
                `<p>v₂ = [${-a12}, ${a11 - lambda2}]</p>`;
        }
