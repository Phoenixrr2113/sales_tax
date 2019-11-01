// what changes are to be applied to the database
exports.up = function(knex, Promise) {
	return knex.schema.createTable('sales_tax', table => {
		table
			.string('State', 255)
			.notNullable()
			.unique();

		table
			.integer('zip_code')
			.notNullable()
			.unique();

		table
			.string('TaxRegionName', 255)
			.notNullable()
			.unique();

		table
			.integer('StateRate')
			.notNullable()
			.unique();

		table
			.integer('EstimatedCombinedRate')
			.notNullable()
			.unique();

		table
			.integer('EstimatedCountyRate')
			.notNullable()
			.unique();

		table
			.integer('EstimatedCityRate')
			.notNullable()
			.unique();

		table
			.integer('EstimatedSpecialRate')
			.notNullable()
			.unique();

		table
			.integer('RiskLevel')
			.notNullable()
			.unique();
	});
};

// how can I undo the changes
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('sales_tax');
};
