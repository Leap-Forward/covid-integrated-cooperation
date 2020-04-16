class AirtableSync

  def perform
    AirNeedTaxonomy.sync_all
    AirInitiative.sync_all
    AirIndividualNeed.sync_all
    AirFamilyNeed.sync_all
  end
end

