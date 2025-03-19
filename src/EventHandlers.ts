/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Epic,
  Epic_EntropyManagerUpdated,
  Epic_EpicBoxBurned,
  Epic_LandTicketAdded,
  Epic_LandTicketRemoved,
  Epic_LandTicketTransferred,
  Epic_MinMaxAssetsUpdated,
  Epic_PlayerMinted,
  Epic_ProbabilitiesUpdated,
  Epic_RoleAdminChanged,
  Epic_RoleGranted,
  Epic_RoleRevoked,
  Epic_ScoutMinted,
} from "generated";

Epic.EntropyManagerUpdated.handler(async ({ event, context }) => {
  const entity: Epic_EntropyManagerUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    entropyManagerAddress: event.params.entropyManagerAddress,
  };

  context.Epic_EntropyManagerUpdated.set(entity);
});

Epic.EpicBoxBurned.handler(async ({ event, context }) => {
  const entity: Epic_EpicBoxBurned = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    epicBoxId: event.params.epicBoxId,
  };

  context.Epic_EpicBoxBurned.set(entity);
});

Epic.LandTicketAdded.handler(async ({ event, context }) => {
  const entity: Epic_LandTicketAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    landTicketId: event.params.landTicketId,
  };

  context.Epic_LandTicketAdded.set(entity);
});

Epic.LandTicketRemoved.handler(async ({ event, context }) => {
  const entity: Epic_LandTicketRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    landTicketId: event.params.landTicketId,
  };

  context.Epic_LandTicketRemoved.set(entity);
});

Epic.LandTicketTransferred.handler(async ({ event, context }) => {
  const entity: Epic_LandTicketTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    landTicketId: event.params.landTicketId,
  };

  context.Epic_LandTicketTransferred.set(entity);
});

Epic.MinMaxAssetsUpdated.handler(async ({ event, context }) => {
  const entity: Epic_MinMaxAssetsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minAssets: event.params.minAssets,
    maxAssets: event.params.maxAssets,
  };

  context.Epic_MinMaxAssetsUpdated.set(entity);
});

Epic.PlayerMinted.handler(async ({ event, context }) => {
  const entity: Epic_PlayerMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    playerId: event.params.playerId,
  };

  context.Epic_PlayerMinted.set(entity);
});

Epic.ProbabilitiesUpdated.handler(async ({ event, context }) => {
  const entity: Epic_ProbabilitiesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    landTicketProbability: event.params.landTicketProbability,
    scoutProbability: event.params.scoutProbability,
    playerProbability: event.params.playerProbability,
  };

  context.Epic_ProbabilitiesUpdated.set(entity);
});

Epic.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: Epic_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.Epic_RoleAdminChanged.set(entity);
});

Epic.RoleGranted.handler(async ({ event, context }) => {
  const entity: Epic_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Epic_RoleGranted.set(entity);
});

Epic.RoleRevoked.handler(async ({ event, context }) => {
  const entity: Epic_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Epic_RoleRevoked.set(entity);
});

Epic.ScoutMinted.handler(async ({ event, context }) => {
  const entity: Epic_ScoutMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    scoutId: event.params.scoutId,
  };

  context.Epic_ScoutMinted.set(entity);
});
