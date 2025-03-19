import assert from "assert";
import { 
  TestHelpers,
  Epic_EntropyManagerUpdated
} from "generated";
const { MockDb, Epic } = TestHelpers;

describe("Epic contract EntropyManagerUpdated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Epic contract EntropyManagerUpdated event
  const event = Epic.EntropyManagerUpdated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Epic_EntropyManagerUpdated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Epic.EntropyManagerUpdated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualEpicEntropyManagerUpdated = mockDbUpdated.entities.Epic_EntropyManagerUpdated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedEpicEntropyManagerUpdated: Epic_EntropyManagerUpdated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      entropyManagerAddress: event.params.entropyManagerAddress,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEpicEntropyManagerUpdated, expectedEpicEntropyManagerUpdated, "Actual EpicEntropyManagerUpdated should be the same as the expectedEpicEntropyManagerUpdated");
  });
});
