import "../css/menu.css"

function menuPage() {
	return `
  <section class="menu-section">
  	<p class="label">Sunday Table</p>
  	<h2>Our Menu</h2>
  	<div class="divider"></div>
  
  	<div class="food-section">
  		<div class="food-category">
  			<div class="food-heading">
  				<h3>Starters</h3>
  				<div class="food-divider"></div>
  			</div>
  			<div class="food-grid">
  				<div class="menu-card featured">
  					<h4>Garlic Butter Prawns</h4>
  					<p>Pan-seared prawns in garlic butter and white wine sauce</p>
  					<div class="menu-card-bottom">
  						<span class="price">$14.00</span>
  						<span class="tag">Chef's Pick</span>
  					</div>
  				</div>
  
  				<div class="menu-card">
  					<h4>Bruschetta</h4>
  					<p>Toasted bread with fresh tomatoes, basil and olive oil</p>
  					<div class="menu-card-bottom">
  						<span class="price">$8.00</span>
  						<span class="tag">Vegan</span>
  					</div>
  				</div>
  
  				<div class="menu-card">
  					<h4>Soup of the Day</h4>
  					<p>Freshly made soup served with warm artisan bread</p>
  					<div class="menu-card-bottom">
  						<span class="price">$7.00</span>
  						<span class="tag">Daily</span>
  					</div>
  				</div>
  			</div>
  		</div>
  
  		<div class="food-category">
  			<div class="food-heading">
  				<h3>Mains</h3>
  				<div class="food-divider"></div>
  			</div>
  			<div class="food-grid">
  				<div class="menu-card featured">
  					<h4>Beef Tenderloin</h4>
  					<p>
  						Slow-roasted beef with red wine reduction and truffle mash
  					</p>
  					<div class="menu-card-bottom">
  						<span class="price">$32.00</span>
  						<span class="tag">Signature</span>
  					</div>
  				</div>
  
  				<div class="menu-card">
  					<h4>Grilled Salmon</h4>
  					<p>Atlantic salmon with lemon butter and seasonal vegetables</p>
  					<div class="menu-card-bottom">
  						<span class="price">$24.00</span>
  						<span class="tag">Popular</span>
  					</div>
  				</div>
  
  				<div class="menu-card">
  					<h4>Mushroom Risotto</h4>
  					<p>Creamy arborio rice with wild mushrooms and parmesan</p>
  					<div class="menu-card-bottom">
  						<span class="price">$18.00</span>
  						<span class="tag">Vegan</span>
  					</div>
  				</div>
  			</div>
  		</div>
  
  		<div class="food-category">
  			<div class="food-heading">
  				<h3>Desserts</h3>
  				<div class="food-divider"></div>
  			</div>
  			<div class="food-grid">
  				<div class="menu-card featured">
  					<h4>Crème Brûlée</h4>
  					<p>Classic vanilla custard with caramelized sugar crust</p>
  					<div class="menu-card-bottom">
  						<span class="price">$9.00</span>
  						<span class="tag">Classic</span>
  					</div>
  				</div>
  
  				<div class="menu-card">
  					<h4>Chocolate Fondant</h4>
  					<p>Warm dark chocolate cake with vanilla ice cream</p>
  					<div class="menu-card-bottom">
  						<span class="price">$10.00</span>
  						<span class="tag">Popular</span>
  					</div>
  				</div>
  
  				<div class="menu-card">
  					<h4>Tiramisu</h4>
  					<p>Espresso-soaked ladyfingers with mascarpone cream</p>
  					<div class="menu-card-bottom">
  						<span class="price">$9.00</span>
  						<span class="tag">Classic</span>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </section>
  `;
}

export default menuPage;
